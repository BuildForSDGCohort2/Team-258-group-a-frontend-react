import React, { Component } from 'react';

const EditBureau = ({editBureauData})=> {
  return (
        <div className="container bg-lightgray p-5">
            <div className="row first-row d-flex mb-4">

                <div className="col-md-6">
                    <div className="row first-sub-row-a justify-content-start">
                        <div className="col-md-3">
                            <p className="edit-bureau-details font-weight-bold">
                                Edit Bureau Details:
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p className="acct-number font-weight-bold">
                                Fumana Acct. No.: xxxxxxxx
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row first-sub-row-b justify-content-end">
                        <div className="col-md-3">
                            <button className="btn btn-primary bg-primary py-1 px-3 font-weight-bold">Update</button>
                        </div>
                        <div className="col-md-3">
                            <a className="text-decoration-none" href="#" title="{user-name}">
                                <div className="border-dark text-center user-icon">
                                    <i aria-hidden="true" className="fa fa-2x fa-user"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4 first-column">
                    <div className="logo-container">
                        <span className="mr-2">
                            Logo
                        </span>
                        <a href="#" className="text-decoration-none font-weight-bold">
                            <span className="ml-3 bg-tertiary color-white p-auto p-2 rounded pointer-cursor">
                                <i aria-hidden="true" className="fa fa-plus-circle mr-2"></i>
                                Upload logo
                            </span>
                        </a>
                    </div>
                    <div className="input-container input-group d-inline">
                        <div className="row mt-5">

                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-book"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Organization's name" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-book"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Organization's type" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-facebook"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Facebook URL" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-twitter"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Twitter URL" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-google-plus"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Google URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 second-column">
                    <div className="date-joined font-weight-bold">Date joined: 21/03/2020</div>

                    <div className="input-container input-group d-inline">
                        <div className="row mt-5">

                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-phone"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="tel" className="form-control" placeholder="Primary phone no" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-phone"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="tel" className="form-control" placeholder="Secondary phone no" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-book"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Contact person" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-book"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Contact position" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-envelope"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="email" className="form-control" placeholder="Primary email" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 third-column">
                    <div className="reg-no font-weight-bold">Registration no.: XXCSX</div>

                    <div className="input-container input-group d-inline">
                        <div className="row mt-5">

                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-link"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="number" className="form-control" placeholder="Website" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-location-arrow"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="number" className="form-control" placeholder="Address" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-location-arrow"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="Street" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-location-arrow"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="text" className="form-control" placeholder="City" />
                            </div>
                            <div className="col-md-2 my-2 mr-0">
                                <span className="input-icon">
                                    <i aria-hidden="true" className="fa fa-tags"></i>
                                </span>
                            </div>
                            <div className="ml-0 my-2 col-md-9">
                                <input type="email" className="form-control" placeholder="Tags" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-1 my-2 mr-0">
                    <span className="input-icon">
                        <i aria-hidden="true" className="p-0 fa fa-italic"></i>
                    </span>
                </div>
                <div className="col-md-11">
                    <div className="desc-text-area">
                        <textarea name="description" className="form-control" id="" cols="10" rows="10"
                            placeholder="Description"></textarea>
                    </div>
                </div>
            </div>
        </div>

        );
    }

export default EditBureau;
