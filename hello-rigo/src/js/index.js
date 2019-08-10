//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
let seconds = 0;
const SecondsCounter = props => {
	return (
		<div className="row justify-content-md-center bg-dark text-white display-3 text-center align-text-bottom">
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				<i className="far fa-clock" />
			</div>
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				{arrayvalue(props.secs.toString())[0]}
			</div>
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				{arrayvalue(props.secs.toString())[1]}
			</div>
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				{arrayvalue(props.secs.toString())[2]}
			</div>
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				{arrayvalue(props.secs.toString())[3]}
			</div>
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				{arrayvalue(props.secs.toString())[4]}
			</div>
			<div className="col col-lg-1 m-3 bg-secondary rounded-lg">
				{arrayvalue(props.secs.toString())[5]}
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	secs: PropType.number
};

//render your react application

function arrayvalue(secondstring) {
	let secondarray = secondstring.split("");
	let countarray = [0, 0, 0, 0, 0, 0];
	let i;
	for (i = 1; i <= secondarray.length; i++) {
		countarray[countarray.length - i] = secondarray[secondarray.length - i];
	}
	return countarray;
}

setInterval(function() {
	ReactDOM.render(
		<SecondsCounter secs={seconds} />,
		document.querySelector("#app")
	);
	seconds++;
	if (seconds === 1000000) {
		seconds = 0;
	}
}, 1000);
