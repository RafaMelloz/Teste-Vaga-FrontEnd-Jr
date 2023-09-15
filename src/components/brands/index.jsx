import { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./brands.css"
import logo from "../../assets/logo.jpg";

export class Brands extends Component{
    render(){

        const settings = {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
            arrows: false,
        };

        return(
            <section className="container brands">
                <div className="division">
                    <h1>Navegue por marcas</h1>
                </div>

                
                
                <div className="group-brands">
                    <Slider {...settings}>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                        <div className="brand-card">
                            <a href="">
                                <img src={logo} alt="vTex" />
                            </a>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}