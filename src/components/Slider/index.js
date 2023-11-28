import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Slider.sass'

const Slider = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1224 },
            items: 3,
            slidesToSlide: 3

            
        },
        tablet: {
            breakpoint: { max: 1024, min: 894 },
            items: 2,
            slidesToSlide: 2

        },
        mobile: {
            breakpoint: { max: 894, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const [windowsSize, setWindowSize] = useState(0)
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(
                window.innerWidth,
            );
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <div
            style={{
                paddingBottom: '80px',
                position: 'relative'
            }}
        >
            <Carousel
                centerMode={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                autoPlay={true}
                containerClass='preevent-carousel'
                renderDotsOutside
            >
                {props.children}
            </Carousel>
        </div>
    )

}

export default Slider;
