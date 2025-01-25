import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        
        <div className="card-container">
            <div className="card">
                <h3>Basic</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>3 days</p>
                <p>5 GB Storage</p>
                <p>1 User</p>
                <p>24/7 Support</p>
                <Link to="/contact"className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>Standard</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>3 days</p>
                <p>5 GB Storage</p>
                <p>1 User</p>
                <p>24/7 Support</p>
                <Link to="/contact"className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>Premium</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>3 days</p>
                <p>5 GB Storage</p>
                <p>1 User</p>
                <p>24/7 Support</p>
                <Link to="/contact"className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard