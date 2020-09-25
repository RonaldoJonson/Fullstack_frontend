import React from 'react';
import {O_Form_register} from '../Organism/o-InputForm';
import {M_Paragraph_basic} from '../Molecules/m-paragraph';

function T_RegisterPage (){
    return <div>
        <M_Paragraph_basic title='Register' text='create a new account'/>
        <O_Form_register></O_Form_register>
    </div>
}

export default T_RegisterPage;