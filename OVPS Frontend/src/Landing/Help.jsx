import React from 'react';
import './Help.css';

const HelpPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Let's get you<br />some help!</h1>
          <h6>Have any issue? Send us an <span className="email-us">email.</span></h6>
          <div className="img-wrapper">
            <img src="https://i.ibb.co/bWfN3Qy/undraw-onboarding-o8mv-1.png" alt="undraw-onboarding-o8mv-1" border="0" />
          </div>
        </div>

        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="list">What list are you looking for?</label>
              <input type="text" className="form-control" id="list" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="tags">Please enter a few primary tags.</label>
              <input type="text" className="form-control" id="tags" />
            </div>

            <div className="form-group">
              <label htmlFor="describe">Please describe your list needs.</label>
              <textarea className="form-control" id="describe" rows="5" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Select Category</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <button type="button" className="btn btn-primary">
              <span>Submit</span> <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
