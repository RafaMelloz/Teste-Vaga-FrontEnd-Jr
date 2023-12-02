
import "./brands.css"
import logo from "../../assets/logo.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

export const Brands = () => {
        return (
            <section className="container brands">
                <div className="division">
                    <h1>Navegue por marcas</h1>
                </div>

                <div className="group-brands">
                    <Swiper 
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1220: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-card">
                                <a href="">
                                    <img src={logo} alt="vTex" />
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        )
    
}