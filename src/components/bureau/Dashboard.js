import React from "react";
import './BureauDashboard.css'



const Dashboard = ({dashBoardData})=>{

    return(
      <div className="container">
      <div className="row mt-5 pt-3">
        <div className="col-md-2 mx-auto rounded border-3 border-solid border-dark bg-lightgray">
          <div className="figures-container text-center mx-auto my-4">
            <div className="figure">150</div>
            <div className="figure-desc font-weight-bold">Job posts</div>
          </div>
        </div>
        <div className="col-md-2 mx-auto rounded border-3 border-solid border-dark bg-lightgray">
          <div className="figures-container text-center mx-auto my-4">

            <div className="figure">20</div>
            <div className="figure-desc font-weight-bold">New employers</div>
          </div>
        </div>
        <div className="col-md-2 mx-auto rounded border-3 border-solid border-dark bg-lightgray">
          <div className="figures-container text-center mx-auto my-4">

            <div className="figure">100</div>
            <div className="figure-desc font-weight-bold">Job seekers</div>
          </div>
        </div>
        <div className="col-md-2 mx-auto rounded border-3 border-solid border-dark bg-lightgray">
          <div className="figures-container text-center mx-auto my-4">
            <div className="figure">10</div>
            <div className="figure-desc font-weight-bold">Employed</div>
          </div>
        </div>
        <div className="col-md-2">
          <label className="mb-2 font-weight-bold font-size-large" for="inlineFormCustomSelect">Time Period: </label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected value="1">Today</option>
            <option value="2">This week</option>
            <option value="3">This month</option>
            <option value="4">This year</option>
          </select>
        </div>
        <div className="col-md-1 float-right">
          <a className="text-decoration-none" href="#" title="{user-name}">
            <div className="border-dark text-center user-icon">
              <i className="fa fa-2x fa-user"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="row mt-5 pt-3">
        <div className="col-md-3 details-container">
          <div className="font-size-large details-title text-center py-3">Job posts</div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 details-container">
          <div className="font-size-large details-title text-center py-3">Job posts under review</div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 details-container">
          <div className="font-size-large details-title text-center py-3">Job seekers</div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 details-container">
          <div className="font-size-large details-title text-center py-3">Employed</div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
          <div className="sub-desc">
            <div className="row my-2 mx-auto">
              <div className="col-md-3 py-2 px-auto bg-lightgray">
                <i className="fa fa-2x fa-female"></i>
              </div>
              <div className="col-md-9 py-2 px-auto bg-lightgray">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Dashboard;