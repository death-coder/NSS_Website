import React, { useEffect } from 'react';

const Carousel = ({ slides = [] }) => {
    useEffect(() => {
        // Initialize Swiper
        const swiper = new window.Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Ensure touch/swipe functionality is enabled
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            allowTouchMove: true,
            touchStartPreventDefault: false,
        });

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    // Default slides if none provided
    const defaultSlides = [
        {
            image: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748197831/tbday_plfzys.jpg",
        },
        {
            image: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748198007/AIDSposter_z8bfoo.jpg",
        },
        {
            image: "https://res.cloudinary.com/dfiyyyjp8/image/upload/v1748411719/wallofchange_f223l9.jpg",
        }
    ];

    const carouselSlides = slides.length > 0 ? slides : defaultSlides;

    return (
        // <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] w-full overflow-hidden rounded-xl">

            <style jsx>{`
                /* Hide default Swiper arrow content */
                .swiper-button-next::after,
                .swiper-button-prev::after {
                    content: "";
                    display: none;
                }
                
                /* Remove default background images */
                .swiper-button-next,
                .swiper-button-prev {
                    background-image: none !important;
                }

                /* Custom animations */
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                    opacity: 0;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                    opacity: 0;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                    opacity: 0;
                }
            `}</style>
            
            <div className="swiper w-full h-full">
                <div className="swiper-wrapper">
                    {carouselSlides.map((slide, index) => (
                        <div key={index} className="swiper-slide relative">
                            {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */}
                            <img 
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                
                {/* Custom Navigation Arrows */}
                <div className="swiper-button-prev !text-white !w-12 !h-12 !mt-0 !left-8 !top-1/2 !transform !-translate-y-1/2 bg-black bg-opacity-30 !rounded-full hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="swiper-button-next !text-white !w-12 !h-12 !mt-0 !right-8 !top-1/2 !transform !-translate-y-1/2 bg-black bg-opacity-30 !rounded-full hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                
                {/* Custom Pagination */}
                <div className="swiper-pagination !bottom-8"></div>
            </div>
        </div>
        </div>
    );
};

export default Carousel;
