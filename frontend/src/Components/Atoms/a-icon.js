import React from 'react';
import {Icon} from "@material-ui/core";

export function A_Icon_Basic (props) {
    return <div variant={props.InputVariant} color={props.buttonColor}>
        {props.buttonText}
    </div>
}