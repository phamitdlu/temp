import React from 'react';
import uuid from 'uuid/v4';


export const Control = ({ value = uuid() }) => {
    return (
        <div>{value}</div>
    )
}

export const Preview = ({ value }) => {
    return (
        <div>{value}</div>
    )
}