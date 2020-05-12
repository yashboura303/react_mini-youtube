/*jshint -W030 */
import React from 'react';

function SideVideos(props) {

	const style = {
		maxWidth: "18rem"
	}
    const SideItems = props.items.slice(1).map((item, index) => {

        return <div style ={style} className="card m-1" key={item.id.videoId}  onClick = {()=>props.setCenterVideo(item.id.videoId)}>
        <img className = 'card-img-top border border-dark' src={item.snippet.thumbnails.medium.url} alt = 'not loaded'
         />
		  <div className="card-body text-white bg-dark">
		    <p className="card-title">{item.snippet.title}</p>
		  </div>
		</div>
    });
    return (

        <div>
        {SideItems}
        </div>

    );

}

export default SideVideos;