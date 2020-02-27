import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Background from '../images/hero_1.jpg';
import BigSale from '../images/blog_1.jpg';
import Women from '../images/women.jpg';
import Men from '../images/men.jpg';
import Children from '../images/children.jpg';
import ItemsCarousel from 'react-items-carousel';
import CarouselImage1 from '../images/cloth_1.jpg';
import CarouselImage2 from '../images/shoe_1.jpg';
import CarouselImage3 from '../images/cloth_2.jpg';
import CarouselImage4 from '../images/cloth_3.jpg';
import CarouselItem from '../Components/CarouselItem';

import { isMobileOnly } from "react-device-detect";
import '../css/home.css';

function Home () {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 10;

    return (
        <div className="site-wrap">
            <Header />
            <div className="site-blocks-cover aos-init aos-animate" style={{backgroundImage: `url(${Background})`}} data-aos="fade">
                <div className="container">
                    <div className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                        <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                        <div className="intro-text text-center text-md-left">
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                        <p>
                            <a href="#" className="btn btn-sm btn-primary">Shop Now</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    
            <div className="site-section site-section-sm site-blocks-1">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                    <div className="icon mr-4 align-self-start">
                    <span className="icon-truck"></span>
                    </div>
                    <div className="text">
                    <h2 className="text-uppercase">Free Shipping</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon mr-4 align-self-start">
                    <span className="icon-refresh2"></span>
                    </div>
                    <div className="text">
                    <h2 className="text-uppercase">Free Returns</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon mr-4 align-self-start">
                    <span className="icon-help"></span>
                    </div>
                    <div className="text">
                    <h2 className="text-uppercase">Customer Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    
            <div className="site-section site-blocks-2">
                <div className="container">
                    <div className="card-deck">
                        <div className="card">
                            <img class="card-img-top" src={Women} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card">
                            <img class="card-img-top" src={Children} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card">
                            <img class="card-img-top" src={Men} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="site-section block-3 site-blocks-2 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>Featured Products</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="">
                        {
                            isMobileOnly ? (
                                <ItemsCarousel
                                    requestToChangeActive={setActiveItemIndex}
                                    activeItemIndex={activeItemIndex}
                                    numberOfCards={1}
                                    gutter={20}
                                    leftChevron={<button>{'<'}</button>}
                                    rightChevron={<button>{'>'}</button>}
                                    outsideChevron
                                    chevronWidth={chevronWidth}
                                >
                                    {
                                        carouselData.map(item => (
                                            <CarouselItem 
                                                image={item.image}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                clas={"carousel-object"}
                                            />
                                        ))
                                    } 
                                </ItemsCarousel>
                            ) : (
                                <ItemsCarousel
                                    requestToChangeActive={setActiveItemIndex}
                                    activeItemIndex={activeItemIndex}
                                    numberOfCards={3}
                                    gutter={20}
                                    leftChevron={<button>{'<'}</button>}
                                    rightChevron={<button>{'>'}</button>}
                                    outsideChevron
                                    chevronWidth={chevronWidth}
                                >
                                    {
                                        carouselData.map(item => (
                                            <CarouselItem 
                                                image={item.image}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                clas={"carousel-object"}
                                            />
                                        ))
                                    } 
                                </ItemsCarousel>
                            )
                        }                           
                    </div>
                </div>
                </div>
            </div>
            </div>
    
            <div class="site-section block-8">
                <div class="container">
                    <div class="row justify-content-center  mb-5">
                    <div class="col-md-7 site-section-heading text-center pt-4">
                        <h2>Big Sale!</h2>
                    </div>
                    </div>
                    <div class="row align-items-center">
                    <div class="col-md-12 col-lg-7 mb-5">
                        <a href="#"><img src={BigSale} alt="Image placeholder" class="img-fluid rounded" /></a>
                    </div>
                    <div class="col-md-12 col-lg-5 text-center pl-md-5">
                        <h2><a href="#">50% less in all items</a></h2>
                        <p class="post-meta mb-4">By <a href="#">Carl Smith</a> <span class="block-8-sep">&bullet;</span> September 3, 2018</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                        <p><a href="#" class="btn btn-primary btn-sm">Shop Now</a></p>
                    </div>
                    </div>
                </div>
            </div>
        <Footer />
      </div>
    )
};


const carouselData = [
    {
        image: CarouselImage1,
        title: "Some title",
        description: "Some description",
        price: "$50"
    },

    {
        image: CarouselImage2,
        title: "Some title",
        description: "Some description",
        price: "$50"
    },

    {
        image: CarouselImage3,
        title: "Some title",
        description: "Some description",
        price: "$50"
    },

    {
        image: CarouselImage4,
        title: "Some title",
        description: "Some description",
        price: "$50"
    }
];

export default Home;