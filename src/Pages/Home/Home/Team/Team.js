import React from "react";

const Team = () => {
  return (
    <div>
      <div className="container pb-5">
        <h1 className="text-center pb-5">Meet Our Team</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
                className="d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">George R. Hall</h5>
                <p className="card-text">Ceo</p>
                <button className="common-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Mark M. Rogers</h5>

                <p className="card-text">Ceo</p>
                <button className="common-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Darius J. Mike</h5>
                <p className="card-text">Ceo</p>
                <button className="common-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;