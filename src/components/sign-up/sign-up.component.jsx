import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {

    constructor(){

        super();

        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const {signUpStart} = this.props;

        if(password != confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart(displayName, email, password);

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument( user, {displayName});

        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });

        // } catch (error) {
        //     console.error(error);
        // }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text"
                        value={displayName} required
                        onChange={this.handleChange} label='Display Name' />
                    <FormInput name="email" type="email" 
                        value={email} required
                        onChange={this.handleChange} label='Email' />
                    <FormInput name="password" type="password" 
                        value={password} required
                        onChange={this.handleChange} label='Password' />
                    <FormInput name="confirmPassword" type="password" 
                        value={confirmPassword} required
                        onChange={this.handleChange} label='Confirm Password' />
                    <CustomButton type="submit" > SIGN UP </CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => 
        dispatch(signUpStart({displayName, email, password}))
});

export default connect(null, mapDispatchToProps)(SignUp);