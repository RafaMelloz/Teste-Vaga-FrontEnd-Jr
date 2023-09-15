import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carrosel.css"
import "./modal.css";
import ReactModal from 'react-modal';

const Carousel = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const formatCurrency = (value) => { 
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
    }

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false, // Remova as setas de navegação
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='cards-group'>
            <Slider {...settings}>
                {products.map(product => (
                    <div className="card-product" key={product.id}>
                        <img src={product.photo} alt={product.productName} />
                        
                        <p className='description'>{product.descriptionShort}</p>

                        <h5 className='price-offer'>R$ 160.000,00</h5>
                        <h4>{formatCurrency(product.price)}</h4>

                        <span>ou 2x de R$ 49,95 sem juros</span><br/>
                        <span>Frete gratis</span>



                        <button className="buy-btn" onClick={() => openModal(product)}>COMPRAR</button>
                    </div>
                ))}
            </Slider>

            <ReactModal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Detalhes do Produto">

                {selectedProduct && (

                    <div>
                        {<button onClick={closeModal} className='btn-close'>X</button>}
                        <div className='flex-modal'>

                            <img src={selectedProduct.photo} alt={selectedProduct.productName} />

                            <div className='group-content'>
                                <h5 className='prod-name'>{selectedProduct.productName}</h5>

                                <h5 className='prod-price'>{formatCurrency(selectedProduct.price)}</h5>

                                <p className='prod-description'>{selectedProduct.descriptionShort}</p>

                                <p className='more-details'>Veja mais detalhes do produto {'>'}</p>

                                <div className='counter-button'>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>

                                <button className='buy-btn'>COMPRAR</button>
                            </div>

                           
                        </div>
                    </div>
                    
                )}
            </ReactModal>
        </div>

        
    );
};

export default Carousel;
