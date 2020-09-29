import React from 'react'

export default function Home(){
    return (

      <div id="container">
        <div className="row pt-8vh">
          <div className="col-2">
            {/* We need this part to make it responsive */}
            <div className="d-none d-sm-none d-md-none d-lg-none"></div>
          </div>
          <div className="col-8">
            <div className="welcome">
              <h1 className="h1 color-primary font-weight-bold my-3">Welcome,</h1>
              <h4 className="h4 mt-5">
                This is a temporary welcome page for
							<span className="bg-info p-1 p-md-3 rounded color-white my-2 my-md-0">team-258-group-a</span>
              </h4>
            </div>
          </div>
          <div>
            <div className="col-2">
              {/* We need this part to make it responsive */}
              <div className="d-none d-sm-none d-md-none d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    )
}

