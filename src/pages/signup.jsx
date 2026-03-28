import '../styles/signup.css'
import { useRef, useState } from 'react';

function Signup() {
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    const [showOtp, setShowOtp] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleVerifyClick = (e) => {
        e.preventDefault(); // prevent form reload
        setShowOtp(true);
    };

    const handleChange = (e, nextRef) => {
        if (e.target.value && nextRef) {
            nextRef.current.focus();
        }

        // Check OTP completeness
        const otp =
            (input1.current?.value || '') +
            (input2.current?.value || '') +
            (input3.current?.value || '') +
            (input4.current?.value || '');

        setChecked(otp.length === 4);
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

        console.log("OTP:", otp);
    };

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

                                <button 
                                    className='email-verify-btn'
                                    onClick={handleVerifyClick}
                                >
                                    Verify
                                </button>
                            </div>

                            {/* OTP SECTION */}
                            {showOtp && (
                                <div className='otp'>
                                    <div className='otp-box'>

                                        <input
                                            ref={input1}
                                            maxLength="1"
                                            onChange={(e) => handleChange(e, input2)}
                                        />

                                        <input
                                            ref={input2}
                                            maxLength="1"
                                            onChange={(e) => handleChange(e, input3)}
                                            onKeyDown={(e) => handleKeyDown(e, input1)}
                                        />

                                        <input
                                            ref={input3}
                                            maxLength="1"
                                            onChange={(e) => handleChange(e, input4)}
                                            onKeyDown={(e) => handleKeyDown(e, input2)}
                                        />

                                        <input
                                            ref={input4}
                                            maxLength="1"
                                            onChange={(e) => {
                                                handleChange(e, null);
                                                print();
                                            }}
                                            onKeyDown={(e) => handleKeyDown(e, input3)}
                                        />

                                        <div className="checkbox">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                readOnly
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='input-group'>
                            <label>Create Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <div className='input-group'>
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className='login-btn'>
                            Signup
                        </button>

                        <div className='signin'>
                            <p>Have an account? <a href='#signup'>Login</a></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup;
