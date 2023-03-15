import React, {useState} from 'react'
import {BiChip,BiLockAlt, BiMailSend, BiUserCircle} from 'react-icons/bi'
import {FaLinkedin,FaFacebookSquare,FaInstagram,FaTwitter} from 'react-icons/fa'
import '../styles/style.FormMenu.css'


function FormMenu() {
    const [navegar, setNavegar] = useState(false);
    const handleIsActive = () => {
        setNavegar(!navegar);
    }
  return (
    <>
    <div className="background"></div>
    <div className='container'>
        <div className="content">
            <h2 className='logo'><BiChip/>ManuelOsmaDev</h2>

            <div className="text-sci">
                <h2>Welcome! <br /> <span>To my new Website</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, consectetur.</p>
            </div>

            <div className="social-icons">
                <a href="#"><FaLinkedin className="icons"/></a>
                <a href="#"><FaFacebookSquare className="icons"/></a>
                <a href="#"><FaInstagram className="icons"/></a>
                <a href="#"><FaTwitter className="icons"/></a>
            </div>
        </div>

        <div className={`logreg-box ${navegar? 'active': ''}`}>
            <div className="form-box login">
                <form action="#">
                    <h2>SigIn</h2>
                    <div className="input-box">
                        <span className="icon"><BiMailSend/></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <span className="icon"><BiLockAlt/></span>
                        <input type="password" required />
                        <label>PassWord</label>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />I agree to terms & conditions
                        </label>
                    </div>

                    <button type="submit" className='btn'>
                        Sig Up
                    </button>

                    <div className="login-register">
                        <p>Already have account <a href="#" className='register' onClick={handleIsActive}>Sign Up</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="#">
                    <h2>Sig Up</h2>

                    <div className="input-box">
                        <span className="icon"><BiUserCircle/></span>
                        <input type="text" required />
                        <label>Name</label>
                    </div>

                    <div className="input-box">
                        <span className="icon"><BiMailSend/></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <span className="icon"><BiLockAlt/></span>
                        <input type="password" required />
                        <label>PassWord</label>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">
                            Forgot Password
                        </a>
                    </div>

                    <button type="submit" className='btn'>
                        Register
                    </button>

                    <div className="login-register">
                        <p>Don't have account <a href="#" className='register' onClick={handleIsActive}>Sign Up</a></p>
                    </div>
                </form>
            </div>

        </div>
    </div>
    
    </>
    
  )
}

export default FormMenu
