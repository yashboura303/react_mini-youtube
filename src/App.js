import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchComponent/SearchBar';
import SideVideos from './SideVideos/sideVideos.js';
import CenterVideo from'./CenterVideo/centerVideo.js';
import api from './api/youtube.js';
const KEY = "AIzaSyDImoYpehiJ9agbhueUW81KqLXfJ69sRUM";

function App() {

	const [items, setItems] = useState(0);
	const [centerVideoID, setCenterVideo] = useState(0);

    function onSubmit(term) {
        api.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        })
        .then((response)=>{
        	setItems(response.data.items);
        	setCenterVideo(response.data.items[0].id.videoId);
        })
        .catch((err) => console.log(err));
    }

    function renderContent(){
    	if (items){
				return <>
				<div className="col-9 border border-dark">
				<CenterVideo videoId={centerVideoID}/>
				</div>
				<div className="col-3 border border-danger">
				<SideVideos items={items} setCenterVideo={setCenterVideo}/>
				</div>
				</>;
    	}

    }

    return (

        <div className="container">
        <SearchBar setInput={onSubmit}/>
        <div className="row mt-3">
    	{renderContent()}
    	</div>
    	</div>
    );
}

export default App;