import React from 'react';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container ms-auto">
      <div className="row">
        <div className="col-12 ">
          <div className="card card-outer">
            <div className="card-header">
              <h3 className="card-title">Student's Dashboard</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 col-sm-12 mb-4">
                  <div className="card card-inner">
                    <div className="card-head d-flex justify-content-center">
                      <label className="card-title">Admission</label>
                    </div>
                    <div className="card-body text-center ">
                      <button className="btn " >
                        New Admission
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 mb-4">
                  <div className="card card-inner">
                    <div className="card-head d-flex justify-content-center">
                      <label className="card-title">Students</label>
                    </div>
                    <div className="card-body text-center">
                      <a className="btn" href="#" role="button">View Students</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 mb-4">
                  <div className="card card-inner">
                    <div className="card-head d-flex justify-content-center">
                      <label className="card-title">ID Cards</label>
                    </div>
                    <div className="card-body text-center">
                      <a className="btn" href="#" role="button">Print ID Cards</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 mb-4">
                  <div className="card card-inner">
                    <div className="card-head d-flex justify-content-center">
                      <label className="card-title">Student Promotion</label>
                    </div>
                    <div className="card-body text-center ">
                      <a className="btn" href="#" role="button">Promote Student</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 mb-4">
                  <div className="card card-inner">
                    <div className="card-head d-flex justify-content-center">
                      <label className="card-title">Transfer Student</label>
                    </div>
                    <div className="card-body text-center ">
                      <a className="btn  " href="#" role="button">View Transfered Students</a>
                      <a className="btn  " href="#" role="button"> Transfer Students</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;