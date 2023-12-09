import "./header.css";


import logo from "../../assets/logo.jpg";

//icons publi
import shield from "../../assets/icons/ShieldCheck.jpg";
import truck from "../../assets/icons/Truck.jpg";
import card from "../../assets/icons/CreditCard.jpg";
//icons header
import group from "../../assets/icons/Group.jpg";
import heart from "../../assets/icons/Heart.jpg";
import conta from "../../assets/icons/UserCircle.jpg";
import shoppingcar from "../../assets/icons/ShoppingCart.jpg";

import searchIcon from "../../assets/icons/MagnifyingGlass.png";
import crown from "../../assets/icons/CrownSimple.jpg";


import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (


        <header className="container">
            <div className="publi">
                <div className="single-publi">
                    <img src={shield} alt="escudo" />
                    <span>Compra <b>100% segura</b></span>
                </div>

                <div className="single-publi">
                    <img src={truck} alt="escudo" />
                    <span><b>Frete grátis</b> acima de R$ 200</span>
                </div>

                <div className="single-publi">
                    <img src={card} alt="escudo" />
                    <span><b>Parcele</b> suas compras</span>
                </div>
            </div>

            <nav className="nav-bar">
                <img src={logo} className="logo" alt="logo" />


                <div className="group-input">
                    <input className="input-search" type="text" placeholder="O que você está buscando?" />
                    <img src={searchIcon} alt="pesquisar" />
                </div>


                <h1 className="icon-menu">
                    {menuOpen === false ?
                        <IoMenu onClick={()=> setMenuOpen(true)} />
                        :
                        <IoClose className="close-menu" onClick = { ()=> setMenuOpen(false)} />
                    }
                </h1>



                <ul className="menu">
                    <li>
                        <a href="#">
                            <img src={group} alt="grupo" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={heart} alt="favoritos" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={conta} alt="conta" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={shoppingcar} alt="carrinho de compras" />
                        </a>
                    </li>
                </ul>

                
            </nav>

            <div className="filters-links ">
                <ul>
                    <li><a href="">TODAS CATEGORIAS</a></li>
                    <li><a href="">SUPERMERCADO</a></li>
                    <li><a href="">LIVROS</a></li>
                    <li><a href="">MODA</a></li>
                    <li><a href="">LANÇAMENTOS</a></li>
                    <li><a href="">OFERTAS DO DIA</a></li>
                    <li><a href=""><img src={crown} />ASSINATURA</a></li>

                </ul>
            </div>



            {menuOpen === true ?
                <div className="menu-mobile">

                    <img src={logo} className="logo-mobile" alt="logo" />

                    <ul className="ul-mobile">
                        <li>
                            <a href="#">
                                <img src={group} alt="grupo" />
                                <span>Group</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={heart} alt="favoritos" />
                                <span>Favoritos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={conta} alt="conta" />
                                <span>Conta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={shoppingcar} alt="carrinho de compras" />
                                <span>Carrinho de compras</span>
                            </a>
                        </li>
                    </ul>
                </div>
                :
                null
            }
        </header>




    );


}