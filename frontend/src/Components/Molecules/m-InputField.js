import React from 'react'
import {TextField} from "@material-ui/core";


export function M_Input_basic (props) {

    let value = "meu valor";

    return <div>
        <TextField id={props.InputTitle + "-input"} label={props.InputTitle} variant={props.InputVariant} value={props.value} onChange={props.onChange} />
    </div>
}


export function M_Input_password (props) {
    return <div>
        <TextField id="Password-input" label="Password" variant={props.InputVariant} type="password" autoComplete="current-password"  value={props.value} onChange={props.onChange}/>
    </div>
}
