import React, { useEffect } from 'react';
import gsap from 'gsap';
import './preload.css';
import imageSix from "../../assets/preload/one.jpg";
import imageTwo from "../../assets/preload/two.jpg";
import imageThree from "../../assets/preload/three.jpg";
import imageFour from "../../assets/preload/four.jpg";
import imageFive from "../../assets/preload/five.jpg";
import imageOne from "../../assets/preload/six.jpg";
import imageSeven from "../../assets/preload/seven.jpg";


const Preloader = () => {
    
    useEffect(() => {
        gsap.from("h2 div", 1.5, {
            yPercent: 100,
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
            },
        });

        gsap.to("h2", 1.5, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
            },
        });

        const overlayClickHandler = () => {
            gsap.to("h2 div", 1.5, {
                yPercent: -100,
                ease: "power4.inOut",
                stagger: {
                    amount: 0.5,
                },
            });

            gsap.to("h2", 1.5, {
                clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
                ease: "power4.inOut",
                stagger: {
                    amount: 0.5,
                },
            });

            gsap.to(".overlay", 2, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
            });

            gsap.to(".img", 2, {
                clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
                stagger: {
                    amount: 1.5,
                },
            });

            gsap.to(".loader", 2, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
                delay: 2,
            });

            // Set preloadcontainer z-index to -1 after 2 seconds
            setTimeout(() => {
                document.querySelector('.preloadcontainer').style.zIndex = -1;
            }, 3500);
        };

        document.querySelector(".overlay").addEventListener("click", overlayClickHandler);

        return () => {
            document.querySelector(".overlay").removeEventListener("click", overlayClickHandler);
        };

    },[]);
   
    return (
        
        <div className='preloadcontainer'>
            <div className='loader'>
                <div className='img'>
                    <img src={imageOne} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageTwo} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageThree} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageFour} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageFive} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageSix} alt='imgOne'/>
                </div>
                <div className='img'>
                    <img src={imageSeven} alt='imgOne'/>
                </div>
            </div>
            <div className='overlay'>
                <div className='rowOne'>
                    <h2 className='title'>Lumora&nbsp;<label className='titleLabel' >'24</label></h2>
                    <h2 className='coltopic'>The Game has begun</h2>
                </div>
                <div className='rowTwo'>
                    <h2 className='colt'>
                        <span>Click </span> anywhere to continue
                    </h2>
                </div>
            </div>
        </div>
    );
    
};

export default Preloader;
