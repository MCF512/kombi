import ReactSlider from 'react-slick';
import styles from './Slider.module.scss'
import { Link } from 'react-router-dom';

interface slide {
    title: string,
    image: string
}

interface props {
   slides: slide[]
}

export const Slider: React.FC<props> = ({slides}) => {
    let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000,
        autoplay: true
    }

    return (
        <ReactSlider {...settings}>
            {slides.map((slide) => {
                return (
                    <div 
                        key={Math.random()}
                    >
                        <div
                            className={styles.slide}
                            style={
                                {
                                    backgroundImage: `url(${slide.image})`,
                                }
                            }
                        >
                            <Link 
                                to='/catalog'
                                className={styles.title}
                            >
                                {slide.title}
                            </Link>
                        </div>
                    </div>
                )
            })}
        </ReactSlider>
    );
};