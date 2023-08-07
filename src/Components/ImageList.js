import React from 'react';

function ImageList(props) {
	const imageLength = props.images.length;
	const images = props.images.map((image) => {
		return (
			<img key={image.id} src={image.webformatURL} alt="" className="images" />
		);
	});
	return (
		<div className="image-main-container">
			<i id="image-num">We have found {imageLength} images.</i>
			<div className="image-container">{images}</div>
		</div>
	);
}

export default ImageList;
