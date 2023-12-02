import "./cards.css";

import desktop from "../../assets/filtersIcons/monitor.png";
import marketplace from "../../assets/filtersIcons/supermercados.png";
import drinks from "../../assets/filtersIcons/whiskey.png";
import tools from "../../assets/filtersIcons/ferramentas.png";
import health from "../../assets/filtersIcons/saude.png";
import run from "../../assets/filtersIcons/run.png";
import fashion from "../../assets/filtersIcons/moda.png";

export const CardFilters = () => {

    return (
        <div className="cards-filters">
            <div className="card">
                <img src={desktop} alt="monitor" />
                <h4>Tecnologia</h4>
            </div>

            <div className="card">
                <img src={marketplace} alt="supermercado" />
                <h4>Supermercado</h4>
            </div>

            <div className="card">
                <img src={drinks} alt="bebidas" />
                <h4>Bebidas</h4>
            </div>

            <div className="card">
                <img src={tools} alt="Ferramentas" />
                <h4>Ferramentas</h4>
            </div>

            <div className="card">
                <img src={health} alt="Saúde" />
                <h4>Saúde</h4>
            </div>

            <div className="card">
                <img src={run} alt="Esportes e Fitness" />
                <h4>Esportes e Fitness</h4>
            </div>

            <div className="card">
                <img src={fashion} alt="Moda" />
                <h4>Moda</h4>
            </div>
        </div>
    )
}