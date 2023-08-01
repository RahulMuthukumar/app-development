// PaymentPage.js
import React, { useState } from 'react';
import './payment.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., make an API call to process payment)
  };

  return (
    <div className="payment-container">
      <div className="card-form">
        <h2 className="form-title">Debit Card Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="card-input">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter 16 Digit Number"
              required
            />
          </div>
          <div className="card-input">
            <label htmlFor="cardHolder">Cardholder Name</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="card-input-group">
            <div className="card-input">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="card-input">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="###"
                required
              />
            </div>
          </div>
          <button type="submit" className="pay-button">Pay Now</button>
          
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
