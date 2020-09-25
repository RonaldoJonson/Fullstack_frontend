import React from 'react';
import {Avatar} from "@material-ui/core";

export function A_Avatar_basic (props) {
    return <Avatar alt={props.src} src={props.image} />
}