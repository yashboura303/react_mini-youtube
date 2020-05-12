import React from 'react';

function CenterVideo(props) {
	const videoID = props.videoId || "Search video";
    return (
    	<div className="container-fluid">	
        <div className="embed-responsive embed-responsive-16by9">

	        <iframe className='embed-responsive-item' title = {`${videoID}`}
			src={`https://www.youtube.com/embed/${videoID}`}>
			</iframe>
        </div>
			<h4 className="mt-3">{props.desc}</h4>
		</div>
    )


}

export default CenterVideo;