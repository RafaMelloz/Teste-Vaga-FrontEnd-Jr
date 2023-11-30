import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { Header } from '../components/header';


import { Component } from 'react';
import { Products } from '../components/products';
import { Partners } from '../components/partners';
import { Brands } from '../components/brands';


export class Home extends Component{
    render(){
        return (
            <>
                <Header/>
                    <Banner/>
                    <Products/>
                    <Partners/>
                    <Brands/>
                <Footer/>
            </>
        );

    };
};

