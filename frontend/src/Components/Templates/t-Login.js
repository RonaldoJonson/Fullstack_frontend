import React from 'react';
import {O_Form_login} from '../Organism/o-InputForm';
import {M_Paragraph_basic} from '../Molecules/m-paragraph';

function T_LoginPage (){
    return <div>
        <M_Paragraph_basic title='Login' text='login to your account'/>
        <O_Form_login></O_Form_login>
    </div>
}

export default T_LoginPage;