import React from "react";
export function Card(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="http://via.placeholder.com/350x150"
				title="A nice image"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and fill
					the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
	function Card(props) {
		render(
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						fill the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	}
}
