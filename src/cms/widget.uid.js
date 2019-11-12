import React from 'react';
import uuid from 'uuid/v4';


export const Control = React.forwardRef(({ value = uuid() }, forwardRef) => {
    return (
        <div ref={forwardRef}>{value}</div>
    )
})

export const Preview = React.forwardRef(({ value }, forwardRef) => {
    return (
        <div ref={forwardRef}>{value}</div>
    )
})