import React from 'react';

function box({textMode, children, ...props}) {

    if (textMode) {
        return (
            <div className={props.classname} onClick={props.onclick}>
                {props.txt}
            </div>
        )   
    }

    return (
        <div className={props.classname}>
            {children}
        </div>
    )
}

export default box
