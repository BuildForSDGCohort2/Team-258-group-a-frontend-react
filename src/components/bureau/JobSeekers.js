import React, { Component } from 'react';

class JobSeekers extends Component {
    
  render() {
        return (
      <div className="container border-dark justify-content-center align-items-center mx-auto mt-5">
      <div className="jobview-container">
        <div className="row">
          <div className="col-md-4">
            <div className="job-details">
              <div className="title">
                <h2 className="font-weight-bold font-size-large">Job details</h2>
              </div>
              <div
                className="job-details-border d-block border-dark border-3 bordered-radius-4 border-gray border-solid p-2">
                <div className="icon p-2 align-items-center text-center">
                  <i className="fa fa-4x fa-briefcase"></i>
                  <div className="subtitle p-2 font-weight-bold align-items-center text-center font-size-large">
                    Domestic worker
                  </div>
                </div>
                <div className="job-description">
                  <table className="table table-borderless mx-auto my-auto">
                    <tr>
                      <th className="float-right font-weight-bold">Job ID:</th>
                      <td>
                        5108
                      </td>
                    </tr>
                    <tr>
                      <th className="float-right font-weight-bold">Job category:</th>
                      <td>
                        Indoor care
                      </td>
                    </tr>
                    <tr>
                      <th className="float-right font-weight-bold">Phone:</th>
                      <td>
                        0084 4452
                      </td>
                    </tr>
                    <tr>
                      <th className="float-right font-weight-bold">Email:</th>
                      <td>
                        john@doe.com
                      </td>
                    </tr>
                    <tr>
                      <th className="float-right font-weight-bold">Posted by:</th>
                      <td>
                        <a href="user" className="text-decoration-none">John
                          Doe</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="detailed-description">
                  <div className="subtitle font-size-large text-center font-weight-bold mt-4">Job details</div>
                  <div className="desc-text p-3 font-size-normal">
                    <p className="desc-text pb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae xercitationem
                      ilique velit xercitationem nostrum. Quidem, similique
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="candidate-details">
              <div className="row mt-0">
                <div className="col-md-3 align-items-start">
                  <div className="title">
                    <h2 className="font-weight-bold">Candidates</h2>
                  </div>
                </div>
                <div className="col-md-3 align-items-end justify-content-end mx-0">
                  <button className="btn btn-primary">Add a Person</button>
                </div>
                <div className="col-md-5 align-items-end justify-content-end mx-0">
                  <div className="search-container">
                    <form className="form-inline">
                      <input title="Search..." className="form-control form-control-sm py-2 w-100" type="text"
                        placeholder="Search..." aria-label="Search" required="required" />
                      <button className="btn btn-secondary btn-rounded search-icon m-0"><i className="fa fa-search"
                          aria-hidden="true"></i>
                      </button>
                      <div className="invalid-feedback">
                        Please input a term to search.
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-1 align-items-end justify-content-end m-0">
                  <div className="close">
                    <button className="btn btn-secondary px-2 py-0" title="Close">x</button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item py-2 font-size-large">
                  <a href="#applicants" className="nav-link active" data-toggle="tab">
                    Applicants <p className="count d-inline" id="c1">(10)</p>
                  </a>
                </li>
                <li className="nav-item py-2 font-size-large">
                  <a href="#shortlisted" className="nav-link" data-toggle="tab">
                    Shortlisted <p className="count d-inline" id="c2">(5)</p>
                  </a>
                </li>
                <li className="nav-item py-2 font-size-large">
                  <a href="#employed" className="nav-link" data-toggle="tab">
                    Employed <p className="count d-inline" id="c3">(5)</p>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="applicants">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr className="bg-gray p-sticky font-weight-bold">
                          <th>ID</th>
                          <th>First name</th>
                          <th>Last name</th>
                          <th>Email</th>
                          <th>Last activity</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="shortlisted">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr className="bg-gray p-sticky font-weight-bold">
                          <th>ID</th>
                          <th>First name</th>
                          <th>Last name</th>
                          <th>Email</th>
                          <th>Last activity</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="employed">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr className="bg-gray p-sticky font-weight-bold">
                          <th>ID</th>
                          <th>First name</th>
                          <th>Last name</th>
                          <th>Email</th>
                          <th>Last activity</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              April 21, 2009 at 9:12 PM
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="c-id">
                              <a className="text-decoration-none" href="#">5801</a>
                            </span>
                          </td>
                          <td>
                            <span className="c-first-name">
                              John
                            </span>
                          </td>
                          <td>
                            <span className="c-last-name">
                              Doe
                            </span>
                          </td>
                          <td>
                            <span className="c-email">
                              john@example.com
                            </span>
                          </td>
                          <td>
                            <span className="c-activity">
                              Never signed in
                            </span>
                          </td>
                          <td>
                            <span className="c-details">
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-remove"
                                    title="Delete"></i></a></div>
                              <div><a className="text-decoration-none mx-2" href="#"> <i className="fa fa-edit"
                                    title="Edit"></i></a></div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-5">
                <div className="col-md-4 float-left">
                  <label className="mb-2 font-weight-bold" for="inlineFormCustomSelect">Status:</label>
                  <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected value="1">Created</option>
                    <option value="2">Under review</option>
                    <option value="3">Published</option>
                    <option value="4">Scheduled for interview</option>
                  </select>
                </div>
                <div className="col-md-6 float-right">
                  <div className="pagination-area display-inline float-right">
                    <span> <a title="Previous" className="text-decoration-none mr-2" href="#previous"><i
                          className="fa fa-caret-left"></i> Previous</a></span>
                    <span> <a title="Next" className="text-decoration-none ml-2" href="#next">Next <i
                          className="fa fa-caret-right"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
  }
}

export default JobSeekers;