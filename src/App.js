import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchComponent/SearchBar';
import SideVideos from './SideVideos/sideVideos.js';
import CenterVideo from'./CenterVideo/centerVideo.js';
import api from './api/youtube.js';
const KEY = "AIzaSyDImoYpehiJ9agbhueUW81KqLXfJ69sRUM";

function App() {

	const [items, setItems] = useState(0);
	const [centerVideoID, setCenterVideoID] = useState(0);
	const [centerVideoDescription, setcenterVideoDescription] = useState(0);

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
        	setCenterVideoID(response.data.items[0].id.videoId);
        	setcenterVideoDescription(response.data.items[0].snippet.title);
        })
        .catch((err) => console.log(err));
    }

    function renderContent(){
    	if (items){
				return <>
				<div className="col-sm-9 ">
				<CenterVideo videoId={centerVideoID} desc={centerVideoDescription}/>
				</div>
				<div className="col-sm-3  text-center">
				<SideVideos items={items} setCenterVideo={setCenterVideoID}/>
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