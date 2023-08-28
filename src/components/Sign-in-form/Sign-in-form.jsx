import { Link, useNavigate } from 'react-router-dom';
import './Sign-in-form.scss'
import { SavedSearch, Mail, Restore } from '@mui/icons-material';

export const SignInForm = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        localStorage.setItem("user", data.get("email"))
        navigate('/')
    };

    return (
        <div className='content'>
            <div className='sign-in-form'>
                <p className='sign-in-form__title'>Do you have account?</p>
                <form className='sign-in-form__form'>
                    <input type='text' className='sign-in-form__form__input' placeholder='Email' />
                    <input type='password' className='sign-in-form__form__input' placeholder='Password' />
                    <input type='submit' value="Sign in" className='sign-in-form__form__btn' />
                </form>
            </div>
            <div className='sign-up-label'>
                <p className='sign-up-label__title'>Are you first time here?</p>
                <Link to='/register' className='sign-up-label__btn'>Sign up</Link>
                <p className='sign-up-label__info'>YOU WILL GAIN</p>
                <div className='sign-up-label__label'>
                    <Mail className='sign-up-label__label__icon' /><span className='sign-up-label__label__text'>Be the first to know about promotions</span>
                </div>
                <div className='sign-up-label__label'>
                    <SavedSearch className='sign-up-label__label__icon' /><span className='sign-up-label__label__text'>Convenient order status tracking</span>
                </div>
                <div className='sign-up-label__label'>
                    <Restore className='sign-up-label__label__icon' /><span className='sign-up-label__label__text'>Easy access to your purchase history</span>
                </div>
            </div>
        </div>
    );
}
