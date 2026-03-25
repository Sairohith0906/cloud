import '../styles/login.css'

function Login() {
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
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className='login-btn'>
                            Login
                        </button>

                        <div className='signin'>
                            <p>Don't have an account?  <a href='#signup'>Register</a></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login