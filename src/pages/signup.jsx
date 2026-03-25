import '../styles/signup.css'
import { useRef } from 'react';

function Signup() {
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    const handleChange = (e, nextRef) => {
    if (e.target.value && nextRef) {
        nextRef.current.focus();
    }
};


    const handleKeyDown = (e, prevRef) => {
        if (e.key === "Backspace" && !e.target.value && prevRef) {
            prevRef.current.focus();
        }
    };

    const print = () => {
        const otp =
            input1.current.value +
            input2.current.value +
            input3.current.value +
            input4.current.value;

        console.log(otp);
    };
    const clicked = false;

    return (
        <div className='main'>
            <div className='card'>

                <div className='logo'>
                    <h1>CLOUD</h1>
                    <p>Welcome back</p>
                </div>

                <div className='login-card'>
                    <form className='form-items'>

                        <div className='input-group'>
                            <label>User Name</label>
                            <input type="text" placeholder="Enter your username" />
                        </div>
                        <div className='input-group'>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className='input-group'>
                            <label>Email</label>
                            <div className='email-verify'>
                                <input type="email" placeholder="Enter your email" />
                                <button className='email-verify-btn'>Verify</button>
                            </div>
                            <div className='otp'>
                                <div className='otp-box'>
                                    <input ref={input1} maxLength="1" onChange={(e) => handleChange(e, input2)}/>

                                    <input ref={input2} maxLength="1" onChange={(e) => handleChange(e, input3)} onKeyDown={(e) => handleKeyDown(e, input1)}/>

                                    <input ref={input3} maxLength="1" onChange={(e) => handleChange(e, input4)} onKeyDown={(e) => handleKeyDown(e, input2)}/>

                                    <input ref={input4} maxLength="1" onChange={print} onKeyDown={(e) => handleKeyDown(e, input3)}/>
                                    <div className="checkbox">
                                        <input type="checkbox" id="agree" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='input-group'>
                            <label>Create Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className='input-group'>
                            <label>Conform Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className='login-btn'>
                            Login
                        </button>

                        <div className='signin'>
                            <p>Have an account?  <a href='#signup'>Login</a></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup