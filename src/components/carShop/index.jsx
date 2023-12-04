import { useContext, useState } from "react";
import { CarShopContext } from "../../context/carShopContext";

import "./car.css"
import { LuShoppingCart } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

export const CarShop = () =>{

    const carContext = useContext(CarShopContext);
    const { carState, setCarState } = carContext;
    const [ carOpen, setCarOpen] = useState(false);

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const precoFinal = carState.reduce((total, product) => {
        return total + product.price * product.quantidade;
    }, 0);

    const openCart = () =>{
        setCarOpen(true)
    }

    const closeCart = () => {
        setCarOpen(false)
    }

    return(
        <>
            {carState.length > 0 ? 
                carOpen ?
                    <div className="opened-car">
                        <div className="top-car">
                            <IoCloseOutline onClick={closeCart}/>
                        </div>
                        <hr/>

                        <div className="content">
                            {carState.map(product=> (
                                <div className="prod-car" key={product.id}>
                                    <img src={product.photo} alt={product.productName} />

                                    <div>
                                        <h2>{product.productName}</h2>
                                        <span>{formatCurrency(product.price * product.quantidade)} - Qnti: {product.quantidade}</span>
                                    </div>                                    
                                </div>
                            ))  }
                        </div>
                        <hr />

                        <div className="bottom-car">
                            <h2>Preço final:  {formatCurrency(precoFinal)}</h2>
                            <button>Confirmar compra</button>
                        </div>



                    </div>
                :    
                    <div className="circle-car" onClick={openCart}>
                        <div>
                            <span>{carState.length}</span>
                            <LuShoppingCart />
                        </div>
                    </div>
            
            : null}

            
        </>
    )
}