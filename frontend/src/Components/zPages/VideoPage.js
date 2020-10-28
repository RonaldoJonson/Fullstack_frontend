import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {O_AppBar_basic} from '../Organism/o-appBar';
import { GetVideoById, GetSideVideos } from '../../Services/API_Videos';
import {A_Avatar_basic} from '../Atoms/a-avatar';
import {A_Typography_Title, A_Typography_SubTitle} from '../Atoms/a-typography';

function VideoPage({
    match: {
        params: { id },
        },
    }) {

    const [video, setVideo] = useState();
    const [sideVideos, setSideVideos] = useState();

    useEffect(() => {
        console.log(id);
        GetVideoById(id, SetVideoCallBack);
        GetSideVideos(SetSideVideoCallBack);
    }, []); 

    const SetVideoCallBack = (data) => {
        setVideo(data.video[0]);
    }

    const SetSideVideoCallBack = (data) => {
        setSideVideos(data.feed);
        console.log(data.feed);
    }

   return <Background>
        <O_AppBar_basic/>
        <PageContent>
            <MainSection>
                {video && <div>
                    <iframe style={{width:'57vw', height:'35vw'}} src={"https://www.youtube.com/embed/" + video.url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
                    <VideoMainInfo>
                        <div style={{height:'70%', marginTop:'20px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                            <A_Typography_Title text={video.title} size='large'></A_Typography_Title>
                            <A_Typography_SubTitle text={'121,870,675 views • Nov 23, 2009'} size='large'></A_Typography_SubTitle>
                        </div>
                    </VideoMainInfo>    
                    <ChannelInfo>
                        <div style={{height:'100%', marginTop:'20px'}}>
                            <div style={{display:'flex', height:'90%'}}>
                                <A_Avatar_basic/>
                                <div style={{marginLeft:'20px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                    <div>   
                                        <A_Typography_Title text={video.title}></A_Typography_Title>
                                        <A_Typography_SubTitle text={'1.86M subscribers'}></A_Typography_SubTitle>
                                    </div>
                                    <div style={{marginBottom:'40px'}}>
                                        <A_Typography_Title text={video.description}></A_Typography_Title>
                                    </div>
                                    <A_Typography_SubTitle text={'SHOW MORE'} size='large'></A_Typography_SubTitle>
                                </div>
                            </div>
                        </div>
                    </ChannelInfo>
                    <ChannelInfo>

                    </ChannelInfo>
                </div>}
            </MainSection> 
            <SideBar>
                {sideVideos && <div>
                    
                </div>}
            </SideBar>
        </PageContent>
    </Background> 
}

export default VideoPage;

const Background = styled.div`
    background-color:${props => props.theme.colors.secondary};
`

const PageContent = styled.div`
    display:flex;
`

const MainSection = styled.div`
    width:57vw;
    margin:30px 0px 0px 90px;
`

const SideBar = styled.div`
    width:25vw;
    margin:30px 20px 0px 20px;
    background-color:red;
`

const VideoMainInfo = styled.div`
    height: 85px;

    border-bottom-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.white}; 
`

const ChannelInfo = styled.div`
    height: 200px;

    border-bottom-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.white}; 
`
