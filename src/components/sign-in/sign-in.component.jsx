import React from 'react'
import './sign-in.styles.scss'
import '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx';
import FormInput from '../form-input/form-input.component.jsx';


class SignIn extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='E-mail'
                        name='email'
                        value={this.state.email} 
                        type='email' 
                        onChange={this.handleChange} 
                        required
                        />
                    <FormInput 
                        label='Password' 
                        name='password' 
                        value={this.state.password} 
                        type='password' 
                        onChange={this.handleChange} 
                        required/>

                    <CustomButton type='submit'>
                        Submit
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;