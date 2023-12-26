import "./products.css";

import { CardFilters } from "../cardsFilters";
import { Carousel } from "../carrossel";
import { useState } from "react";


export const Products = () => {
    const [filterStatus, setFilterStatus] = useState(1)

    const filter = (number) =>{
        setFilterStatus(number)
    }

    return (
        <section className="container">
            <CardFilters />

            <div className="division">
                <hr /><h1>Produtos selecionados</h1><hr />
            </div>

            <div className="group-buttons">
                <button className="filter-button" onClick={()=> filter(1)}>Celular</button>
                <button className="filter-button" onClick={() => filter(2)}>acessórios</button>
                <button className="filter-button" onClick={() => filter(3)}>tablets</button>
                <button className="filter-button" onClick={() => filter(4)}>NOTEBOOKS</button>
                <button className="filter-button" onClick={() => filter(5)}>TVs</button>
                <button className="filter-button" onClick={() => filter(0)}>VER TODOS</button>
            </div>

            <Carousel filter={filterStatus} />
        </section>
    )

}
