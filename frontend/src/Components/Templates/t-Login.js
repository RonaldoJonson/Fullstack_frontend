import React from 'react';
import {O_Form_login} from '../Organism/o-InputForm';
import {M_Paragraph_Basic} from '../Molecules/m-paragraph';
import {A_link_basic} from "../Atoms/a-link"; 

function T_LoginPage (){
    return <div>
        <M_Paragraph_Basic title='Login' text='login to your account'/>
        <O_Form_login></O_Form_login>
    </div>
}

export default T_LoginPage;