import { Component } from "react";
import "./products.css";


import { CardFilters } from "../cardsFilters";
import Carousel from "../carrosel";


export class Products extends Component{
    
    render(){

        return(
    
            <section className="container">
                <CardFilters/>
                
                <div className="division">
                    <hr/><h1>Produtos selecionados</h1><hr/>
                </div>

                <div className="group-buttons">
                    <button className="filter-button">Celular</button>
                    <button className="filter-button">acessórios</button>
                    <button className="filter-button">tablets</button>
                    <button className="filter-button">NOTEBOOKS</button>
                    <button className="filter-button">TVs</button>
                    <button className="filter-button">VER TODOS</button>
                </div>

                <Carousel/>
                
            </section>
        )
    }
}
