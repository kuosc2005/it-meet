import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1224 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 894 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 894, min: 0 },
            items: 1
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
                centerMode={windowsSize > 864 ? true : false}
                responsive={responsive}
                showDots={true}
                infinite={true}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside
            >
                {props.children}
            </Carousel>
        </div>
    )

}

export default Slider;
