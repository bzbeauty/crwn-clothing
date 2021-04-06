import React from 'react';
import { connect } from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { emailSignInStartA } = this.props;
        const { email, password } = this.state;

        emailSignInStartA(email, password);

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: ''});
        // } catch (error) {
        //     console.log(error);
        // }

        // this.setState({ email:'', password:'' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" 
                        value={this.state.email} required
                        handleChange={this.handleChange} label='Email' />
                    <FormInput name="password" type="password" 
                        value={this.state.password} required
                        handleChange={this.handleChange} label="Password"/>
                    <ButtonsBarContainer>

                    <CustomButton type="submit" > Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                    </ButtonsBarContainer>
                </form>

            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStartA: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);