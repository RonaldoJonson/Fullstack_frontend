import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {GetFeed} from '../../Services/API_Videos';
import {O_AppBar_basic} from '../Organism/o-appBar';
import {M_Video_Miniature} from '../Molecules/m-videoMiniature';

function T_HomePage (){

    const [feed, setFeed] = useState([]);

    useEffect(() => {
        GetFeed(SetFeedVariables);
    }, []);

    const SetFeedVariables = (data) => {
        setFeed(data.feed);
    }

    function RenderFeed (){
        return feed.map(video => {
            return <div key={video.title}>
                <M_Video_Miniature video={video} />
            </div>
        })
    }

    return <div>
        <O_AppBar_basic/>
        <div style={{width:"90vw", height:"60vh", margin:"100px auto", display:"flex", flexWrap:"wrap", justifyContent:"start"}}>
            {feed && RenderFeed()}
        </div>
    </div>
}

export default T_HomePage;