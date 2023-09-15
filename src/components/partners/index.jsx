import { Component } from "react";
import "./partners.css"

export class Partners extends Component{
    render(){
        return(
            <section className="container">
                <div className="partners-group">
                    <div className="partner">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <a href="">CONFIRA</a>
                    </div>

                    <div className="partner">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <a href="">CONFIRA</a>
                    </div>
                </div>

                <div className="producs-division">
                    <div className="division">
                        <hr /><h1>Produtos selecionados</h1><hr />
                    </div>
                    <h3>Ver todos</h3>
                </div>


                <div className="partners-product-group">
                    <div className="partner-product">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <a href="">CONFIRA</a>
                    </div>

                    <div className="partner-product">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <a href="">CONFIRA</a>
                    </div>
                </div>
                
            </section>
        )
    }
}