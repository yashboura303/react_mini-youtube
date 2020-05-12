import React from 'react';

function CenterVideo(props) {
	const videoID = props.videoId || "Search video";
    return (
        <div>
	        <iframe className='container-fluid' title = {`${videoID}`}
			src={`https://www.youtube.com/embed/${videoID}`}>
			</iframe>
        </div>
    )


}

export default CenterVideo;