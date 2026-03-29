import styles from '../styles/login.module.css';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className={styles.main}>
            <div className={styles.card}>

                <div className={styles.logo}>
                    <h1>CLOUD</h1>
                    <p>Welcome back</p>
                </div>

                <div className={styles["login-card"]}>
                    <form className={styles["form-items"]}>

                        <div className={styles["input-group"]}>
                            <label>User Name</label>
                            <input type="text" placeholder="Enter your username" />
                        </div>

                        <div className={styles["input-group"]}>
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className={styles["login-btn"]}>
                            Login
                        </button>

                        <div className={styles.signin}>
                            <p>
                                Don't have an account?  
                                <Link to = "/signup"> Register</Link>
                            </p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;
