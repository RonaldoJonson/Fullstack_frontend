import React , {useState, useEffect} from 'react';
import {M_Input_basic, M_Input_password } from "../Molecules/m-InputField";
import {A_link_basic} from "../Atoms/a-link"; 
import {A_Button_Basic} from '../Atoms/a-button';
import {Login} from '../../Services/API_User';
import {Register} from '../../Services/API_User';

export function O_Form_login () {

   const [userEmail, setUserEmail] = useState('');
   const [password, setPassword] = useState('');

    return <div>
        <M_Input_basic InputTitle="Email" InputVariant="standard" value={userEmail} onChange={(event) => setUserEmail(event.target.value)}/>
        <M_Input_password InputTitle="Password" InputVariant="standard" value={password} onChange={(event) => setPassword(event.target.value)}/>

        <A_link_basic text='forgot your password?' link='register'/>
        <A_Button_Basic InputTitle="Create Account" InputVariant="outlined" buttonColor="primary" buttonText="Create Account"/>
        <A_Button_Basic InputTitle="Login" InputVariant="contained" buttonColor="primary" buttonText="Login" handleClick={() => Login(userEmail, password)}/>
    </div>
}

export function O_Form_register () {

    const [userName, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div>
        <M_Input_basic InputTitle="User" InputVariant="standard" value={userName} onChange={(event) => setUsername(event.target.value)}/>
        <M_Input_basic InputTitle="Email" InputVariant="standard" value={userEmail} onChange={(event) => setUserEmail(event.target.value)}/>
        <M_Input_password InputTitle="Password" InputVariant="standard" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <A_Button_Basic InputTitle="Login to existing account" InputVariant="outlined" buttonColor="primary" buttonText="Login to existing account"/>
        <A_Button_Basic InputTitle="Register" InputVariant="contained" buttonColor="primary" buttonText="Register" handleClick={() => Register(userName, userEmail, password)}/>
    </div>
}