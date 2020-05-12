/*jshint -W030 */
import React from 'react';

function SideVideos(props) {


    const SideItems = props.items.slice(1).map((item, index) => {

        return <img className = 'img img-fluid mb-2'  key={item.id.videoId} src={item.snippet.thumbnails.high.url} alt = 'not loaded'
        onClick = {()=>props.setCenterVideo(item.id.videoId)} />;
    });
    return (

        <div>
        {SideItems}
        </div>

    );

}

export default SideVideos;