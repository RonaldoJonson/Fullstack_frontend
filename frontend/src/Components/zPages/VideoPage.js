import React, {useEffect, useState} from 'react';
import {O_AppBar_basic} from '../Organism/o-appBar';
import { GetVideoById } from '../../Services/API_Videos';
import {A_Avatar_basic} from '../Atoms/a-avatar';
import {A_Typography_Title, A_Typography_SubText} from '../Atoms/a-typography';

function VideoPage({
    match: {
        params: { id },
        },
    }) {

    const [video, setVideo] = useState();

    useEffect(() => {
        console.log(id);
        GetVideoById(id, SetVideoCallBack);
    }, []); 

    const SetVideoCallBack = (data) => {
        setVideo(data.video[0]);
    }

   return <div>
        <O_AppBar_basic/>
        {video && <div style={{width:"90vw", margin:"100px auto"}}>
            <iframe style={{width:'60vw', height:'30vw'}} src={"https://www.youtube.com/embed/" + video.url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
            <A_Avatar_basic alt={video.created_by} image='https://picsum.photos/200/300'></A_Avatar_basic>
            <A_Typography_Title text={video.title}></A_Typography_Title>
            <A_Typography_SubText text={video.description}></A_Typography_SubText>
        </div>}
    </div> 
}

export default VideoPage;
