import React, { Component } from 'react';
import './NotFound.css';
import $ from 'jquery';

class NotFound extends Component {

	var parallax = function (e) {
		var windowWidth = $(window).width();
		if (windowWidth < 768) return;
		var halfFieldWidth = $(".parallax").width() / 2,
			halfFieldHeight = $(".parallax").height() / 2,
			fieldPos = $(".parallax").offset(),
			x = e.pageX,
			y = e.pageY - fieldPos.top,
			newX = (x - halfFieldWidth) / 30,
			newY = (y - halfFieldHeight) / 30;
		$('.parallax [class*="wave"]').each(function (index) {
			$(this).css({
				transition: "",
				transform: "translate3d(" + index * newX + "px," + index * newY + "px,0px)"
			});
		});
	},
	stopParallax = function () {
		$('.parallax [class*="wave"]').css({
			transform: "translate(0px,0px)",
			transition: "all .7s"
		});
		$timeout(function () {
			$('.parallax [class*="wave"]').css("transition", "");
		}, 700);
	};
$(document).ready(function () {
	$(".not-found").on("mousemove", parallax);
	$(".not-found").on("mouseleave", stopParallax);
});
    render() {
        return (
            <div className="container">
                <div className="not-found parallax">
                    <div className="sky-bg"></div>
                    <div className="wave-7"></div>
                    <div className="wave-6"></div>
                    <a className="wave-island" href="/index.html">
                        <img src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg" alt="Island" />
                    </a>
                    <div className="wave-5"></div>
                    <div className="wave-lost wrp">
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
                    <div className="wave-message">
                        <p>You're lost</p>
                        <p>Click on the island to return</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;