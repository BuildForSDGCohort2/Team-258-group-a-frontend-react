import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {

    render() {
        return (
      <div className="container">
			<div className="not-found parallax">
				<div className="sky-bg"></div>
				<div className="wave-7"></div>
				<div className="wave-6"></div>
				<a className="wave-island" href="/">
					<img src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg" alt="Island" />
				</a>
				<div className="wave-5"></div>
				<div className="wave-lost wrp text-center px-3">
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</div>
				<div className="wave-4"></div>
				<div className="wave-boat">
					<img className="boat" src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg" alt="Boat" />
				</div>
				<div className="wave-3"></div>
				<div className="wave-2"></div>
				<div className="wave-1"></div>
				<div className="row">
					<div className="col-sm-12">
						<div className="wave-message text-center pb-5 mx-3">
							<p>You're lost in the middle of nowhere.</p>
							<p>Click on the island to return home.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default NotFound;