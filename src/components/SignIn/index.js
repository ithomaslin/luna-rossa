import React, { Component } from "react";
import "./style.scss";
import Button from "../forms/Buttom";

class SignIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>LogIn</h2>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSignIn">
                                <div className="row">
                                    <Button>Sign in with Google</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default SignIn;
