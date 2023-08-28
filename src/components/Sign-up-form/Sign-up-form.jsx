import './Sign-up-form.scss'
import { Link, useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
    return(
        <div className='content'>
            <div className='sign-in-label'>
                <p className='sign-in-label__title'>Do you have account?</p>
                <Link to='/account' className='sign-in-label__btn'>Sign in</Link>
            </div>
            <div className='sign-up-form'>
                <p className='sign-up-form__title'>Do you have account?</p>
                <form className='sign-up-form__form'>
                    <input type='text' className='sign-up-form__form__input' placeholder='Email' />
                    <div className='sign-up-form__form__fullname'>
                        <input type='text' className='sign-up-form__form__fullname__input sign-up-form__form__input' placeholder='First name' />
                        <input type='text' className='sign-up-form__form__fullname__input sign-up-form__form__input' placeholder='Last name' />
                    </div>
                    <input type='password' className='sign-up-form__form__input' placeholder='Password' />
                    <input type='submit' value="Sign up" className='sign-up-form__form__btn' />
                </form>
            </div>
        </div>
    )
}
