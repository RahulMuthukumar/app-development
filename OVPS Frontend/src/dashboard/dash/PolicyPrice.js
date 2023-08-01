import React from 'react';
import './PolicyPrice.css';



function PriceList() {
  return (
    <>
    
      <div className="price-list-container">
        <h1>Price Details</h1>
        <table>
          <thead>
            <tr>
              <th>Policy</th>
              <th>Price Starts From</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Health Insurance</td>
              <td>Rs 2000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Term Life Insurance</td>
              <td>Rs 5000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Child Saving Plan</td>
              <td>Rs 13,000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Family Health Insurance</td>
              <td>Rs 15,000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Group Health Insurance</td>
              <td>Rs 25,000/-</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Zero Cost Term Plan</td>
              <td>Rs 50,000/-</td>
              <td>Premium</td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PriceList;
