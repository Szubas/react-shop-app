import './Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer__socials'>
                <div className='footer__socials__item'><FacebookIcon /></div>
                <div className='footer__socials__item'><TwitterIcon /></div>
                <div className='footer__socials__item'><InstagramIcon /></div>
                <div className='footer__socials__item'><YouTubeIcon /></div>
            </div>
            <div className='footer__space'></div>
            <div className='footer__copyright'>Clothes shop © 2023 Wszelkie prawa zastrzeżone</div>
        </div>
    )
}
