import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import Footer from './Footer';
import  { Redirect } from 'react-router-dom';

class Login extends React.Component {
    render () {
        const responseFacebook = (response: any) => {
            if (response && response.accessToken) {
                sessionStorage.setItem('name', response.name);
                sessionStorage.setItem('accesstoken', response.accessToken);
                sessionStorage.setItem('picture', response.picture.data.url);
                window.location.href = "/trand";
            }
        }

        if (sessionStorage.getItem('accesstoken')) {
            return <Redirect to='/trand' />
        }

        return (<div className="page-container">
            <div className="Login">
                <div className="first-container">
                    <h1>Welcome</h1>
                    <div className="create-text">Please create an account <br />to continue!</div>
                    <FacebookLogin
                    appId="862155054283854"
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    textButton="Continue with Facebook"
                    icon="fa-facebook" />
                    <div className="email-text">OR USE EMAIL INSTEAD</div>
                    <div className="input-container">
                        <i className="fa fa-envelope icon" />
                        <input className="input-field" type="text" placeholder="Email Address" name="email" />
                    </div>
                    <div className="input-container">
                        <i className="fa fa-lock icon" />
                        <input className="input-field" type="password" placeholder="Password" name="passowrd" />
                    </div>
                    <div className="input-container">
                        <button className="sign-up">Sign Up</button>
                    </div>
                    <div className="having-account-text">Already have an account? <a href="#">Login</a></div>
                </div>
                <div className="second-container" />
            </div>
            <Footer />
        </div>);
    }
}

export default Login;