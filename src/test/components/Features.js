import React from 'react'
import IconOne from '../../assets/icons/guide.png'
import IconTwo from '../../assets/icons/wallet.png'
import IconThree from '../../assets/icons/traveling.png'

function Features(){
    return(
        <div className="stats">
            <div className="container">
                <h3 className="stats-heading text-center my-1">
                 Our Features
                </h3>
                <div className="grid grid-3 text-center my-4">
                    <div>
                        <img className="icon-img" src={IconOne} alt="icon" />
                        <p className="text-secondary">10+ Our Local Guides</p>
                    </div>
                    <div>
                        <img src={IconTwo} className="icon-img" alt="icon" />
                        <p className="text-secondary">Trusted Tour Agency</p>
                    </div>
                    <div>
                        <img src={IconThree} className="icon-img" alt="icon" />
                        <p className="text-secondary">98% Our Travellers are happy</p>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Features