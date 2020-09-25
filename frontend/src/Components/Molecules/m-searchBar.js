import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";

export function M_SearchBar_basic (props) {
    return <div>
        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
            margin:"0 auto",
            height:'31px',
            maxWidth:'800px',
            marginBottom:'3px'
        }}
        />
    </div >
}