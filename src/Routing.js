import React from "react";
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import TopArtists from './TopArtists';
import RecommendedTracks from './RecommendedTracks';

const NotFound = () => {
    <h1>404</h1>
}


const Routing = () => {
    return(
        <div>
            <div>

            </div>
            <Routes>
                <Route path='/Search' element={<Search />} />
                <Route path='/TopArtists' element={<TopArtists/>}/>
                <Route path='/RecommendedTracks' element={<RecommendedTracks />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default Routing;