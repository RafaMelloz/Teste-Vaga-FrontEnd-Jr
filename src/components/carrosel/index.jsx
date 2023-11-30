import React, { useEffect, useState } from 'react';

//carrossel e modal
import ReactModal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

//css
import "./carrossel.css"
import "./modal.css";

// Import Swiper styles
import 'swiper/css';

const Carousel = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetch('./products.json', {
            headers: {
                Accept: "application/json"
            }
        })
            .then(res => res.json())


            .then(res => setProducts(res.products))
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


    return (
        <div className='cards-group'>

            <Swiper
                spaceBetween={0}
                slidesPerView={4}
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
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
            >

                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <div className="card-product" key={product.id}>
                            <img src={product.photo} alt={product.productName} key={product.id} />

                            <p className='description' key={product.id}>{product.descriptionShort}</p>

                            <h5 className='price-offer'>R$ 160.000,00</h5>
                            <h4>{formatCurrency(product.price)}</h4>

                            <span>ou 2x de R$ 49,95 sem juros</span><br />
                            <span>Frete gratis</span>

                            <button className="buy-btn" onClick={() => openModal(product)}>COMPRAR</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Detalhes do Produto">

                {selectedProduct && (
                    <div>
                        {<button onClick={closeModal} className='btn-close'>X</button>}
                        <div className='flex-modal'>

                            <img className='imgModal' src={selectedProduct.photo} alt={selectedProduct.productName} />

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
