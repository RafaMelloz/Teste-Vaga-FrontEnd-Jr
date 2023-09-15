import { Component } from "react";
import "./footer.css";

import econ from "../../assets/futuraempresa.png";
import vtex from "../../assets/vtex.png";

//icons
import yt from "../../assets/icons/yt.png";
import face from "../../assets/icons/face.png";
import insta from "../../assets/icons/insta.png";

//imgs bank
import alelo from "../../assets/bankImages/alelo.png"
import amex from "../../assets/bankImages/amex.png"
import dinners from "../../assets/bankImages/dinners.png"
import elo from "../../assets/bankImages/elo.png"
import ifood from "../../assets/bankImages/ifood.png"
import mastercard from "../../assets/bankImages/mastercard.png"
import pix from "../../assets/bankImages/pix.png"
import sodexo from "../../assets/bankImages/sodexo.png"
import ticket from "../../assets/bankImages/ticket.png"
import visa from "../../assets/bankImages/visa.png"


export class Footer extends Component{

    
    render(){
        return(
            <footer>
                <div className="container flex-first-footer">

                    <div className="group-links">
                        <div className="col">
                            <h4 className="title-col">Sobre nós</h4>
                            <ul>
                                <li><a href="">conheça</a></li>
                                <li><a href="">como comprar</a></li>
                                <li><a href="">indicações e desconto</a></li>
                            </ul>

                            <div className="col-icons">
                                <a href=""><img src={face} alt="facebook" /></a>
                                <a href=""><img src={insta} alt="instagram" /></a>
                                <a href=""><img src={yt} alt="youtube" /></a>                      
                            </div>
                        </div>

                        <div className="col">
                            <h4 className="title-col">INFORMAÇÕES ÚTEIS</h4>
                            <ul>
                                <li><a href="">fale conosco</a></li>
                                <li><a href="">dúvidas</a></li>
                                <li><a href="">prazos e entregas</a></li>
                                <li><a href="">formas de pagamento</a></li>
                                <li><a href="">política de privacidade</a></li>
                                <li><a href="">trocas e devoluções</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4 className="title-col">FORMAS DE PAGAMENTO</h4>
                        
                            <div className="grid">
                                <img src={visa} />
                                <img src={elo} />
                                <img src={alelo}/>

                                
                                <img src={dinners}/>
                                
                                <img src={ifood}/>
                                <img src={mastercard}/>
                                <img src={pix}/>
                                <img src={amex} />
                                <img src={ticket}/>
                                <img src={sodexo} />
                                
                            </div>

                        </div>
                    </div>
                    
                    <div className="box-news">
                        <h5>Cadastre-se e Receba nossas</h5>
                        <h4>novidades e promoções</h4>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <form className="group">
                            <input type="email" placeholder="SEU E-MAIL" required/>
                            <input type="submit" value="OK" />
                        </form> 
                    </div>
                </div>

                <hr/>

                <div className="container flex-second-footer">
                    <p className="copy">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>

                    <div className="group-icons">
                        <img src={econ} alt="econverse" />
                        <img src={vtex} alt="vtex" />
                    </div>
                </div>

                 
            </footer>
        )
    }
}