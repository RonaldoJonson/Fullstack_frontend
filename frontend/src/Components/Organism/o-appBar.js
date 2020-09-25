import React from 'react';
import logo from '../../imgs/yt_logo.jpg';
import { AppBar, Toolbar, IconButton} from "@material-ui/core";
import { M_SearchBar_basic } from '../Molecules/m-searchBar';
import { A_MenuIcon, A_AddIcon } from '../Atoms/a-icon'; 
import { A_Button_Icon} from '../Atoms/a-button';

import { useHistory } from "react-router-dom";

export function O_AppBar_basic (props) {

    const history = useHistory();

    const NextPage = (page) => {
        history.push("/" + page);
    };

    return (
    <AppBar>
        <Toolbar>
            <A_Button_Icon icon={<A_MenuIcon />} edge='start' buttonColor='inherit' label='open drawer' handleClick={() => NextPage('Home')}/>
            <div style={{marginLeft:"20px"}}>
                <img src={logo} style={{margin:"auto 0", height:'31px', width:'45px'}} onClick={() => NextPage('Home')}/>
            </div>
            <div style={{width:"60vw"}}>
                <M_SearchBar_basic/>
            </div>
            <div>
                <A_Button_Icon icon={<A_AddIcon />} edge='start' buttonColor='inherit' label='open drawer' handleClick={() => NextPage('Upload')}/>
            </div>           
        </Toolbar>    
    </AppBar>
    )
}