import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import CardOneImg from '../assets/images/img-9.jpg'
import CardTwoImg from '../assets/images/img-2.jpg' 
function Cards(){
    return(
        <div className="Cards">
            <h1 style={{marginTop:"30px"}}>Description about travel areas</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {/* Card Section One */}
                    <ul className="cards__items">
                        <CardItem 
                        src={CardOneImg}
                        text='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src={CardTwoImg}
                        text='Travel through the Islands of Bali in a
                        Private Cruise'
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                    {/* Card Section Two */}
                    <ul className="cards__items">
                        <CardItem 
                        src={CardOneImg}
                        text='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src={CardTwoImg}
                        text='Travel through the Islands of Bali in a
                        Private Cruise'
                        label="Luxury"
                        path="/services"
                        />
                        <CardItem 
                        src={CardTwoImg}
                        text='Travel through the Islands of Bali in a
                        Private Cruise'
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards