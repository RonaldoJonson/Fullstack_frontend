import React from 'react';
import {A_Frame_basic} from '../Atoms/a-frame';
import {A_Avatar_basic} from '../Atoms/a-avatar';

import { useHistory } from "react-router-dom";

export function M_Video_Miniature (props) {

    const video = props.video;
    const history = useHistory();

    const NextPage = (id) => {
        history.push("/video/" + id);
    };

    return <div key={video.title + '_mini'} style={{width:"350px", height:"350px"}}>
        <img style={{width:"90%", height:"50%"}} src='https://picsum.photos/300/200' onClick={() => NextPage(video.id)}/>
        <A_Avatar_basic alt={video.created_by} image='https://picsum.photos/200/300'></A_Avatar_basic>
        <h4>{video.title}</h4>
        <p>{video.description}</p>
    </div> 
}

