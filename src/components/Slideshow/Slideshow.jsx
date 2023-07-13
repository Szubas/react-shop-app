import './Slideshow.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';


const slideImages = [
    {
      url: image1,
      caption: 'image1'
    },
    {
      url: image2,
      caption: 'image2'
    },
    {
      url: image3,
      caption: 'image3'
    },
  ];

export const Slideshow = () => {
    return(
        <div className="slider">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div className='slider__item' style={{ 'backgroundImage': `url(${slideImage.url})` }}></div>
                    </div>
                ))} 
            </Slide>
      </div>
    )
}
