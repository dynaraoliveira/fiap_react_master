import React from 'react'

const Loading = () => {
    return (
        <div style={ {textAlign: "center" , marginTop: 80} }>
            <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
        </div>
    );
}

export default Loading