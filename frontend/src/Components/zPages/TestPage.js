import React from 'react';
import {A_Button_Basic} from '../Atoms/a-button';
import {M_Input_basic, M_Input_password} from '../Molecules/m-InputField';
import {O_Form_login, O_Form_register} from '../Organism/o-InputForm';

function TestPage (){
    return <div>s
        <h1>Atoms</h1>
        <A_Button_Basic InputTitle="User" InputVariant="contained" buttonColor="primary" buttonText="Send"/>
        <h1>Molecules</h1>
        <M_Input_basic InputTitle="User" InputVariant="standard"/>
        <M_Input_password InputTitle="User" InputVariant="standard"/>
        <h1>Organism</h1>
        <O_Form_login></O_Form_login>
        <O_Form_register></O_Form_register>
    </div>
}

export default TestPage;