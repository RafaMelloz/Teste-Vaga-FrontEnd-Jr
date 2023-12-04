import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import { Products } from '../components/products';
import { Partners } from '../components/partners';
import { Brands } from '../components/brands';
import { CarContext} from '../context/carShopContext';
import { CarShop } from '../components/carShop';


export const Home = () =>{
        


        return (
            <CarContext>
                <Header/>
                    <Banner/>
                    <Products/>
                    <Partners/>
                    <Brands/>
                    <CarShop/>
                <Footer/>
            </CarContext>
        );

};

