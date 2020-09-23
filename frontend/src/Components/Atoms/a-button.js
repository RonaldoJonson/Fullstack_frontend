import React from 'react';
import {Button} from "@material-ui/core";

export function A_Button_Basic (props) {
    return <Button variant={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </Button>
}

export function A_Button_Icon (props) {
    return <Button variant={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </Button>
}