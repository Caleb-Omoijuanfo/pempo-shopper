import React from 'react';

function CarouselItem (props){
    return (
        <div className={props.clas}>
            <div className="block-4 text-center">
                <figure className="block-4-image">
                    <img src={props.image} alt="Image placeholder" class="img-fluid" />
                </figure>
                <div class="block-4-text p-4">
                    <h3><a href="#">{props.title}</a></h3>
                    <p class="mb-0">{props.description}</p>
                    <p class="text-primary font-weight-bold">{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;