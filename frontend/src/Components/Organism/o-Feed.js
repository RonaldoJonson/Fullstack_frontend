import React, {useState} from 'react';
import {M_Video_Miniature} from '../Molecules/m-videoMiniature';

export function O_Feed_Basic (props) {
    return (
    <div>  
        {
        props.feed.map(video => {
            return <M_Video_Miniature key={video.title} video={video} />
        })
        }
    </div>
    )
}

//