import React from 'react';
import {Typography} from "@material-ui/core";

export function A_Typography_Title (props) {
    return <Typography variant='h4' color='primary'>
        {props.text}
    </Typography>
}

export function A_Typography_SubText (props) {
    return <Typography variant='subtitle1' color='textPrimary'>
        {props.text}
    </Typography>
}