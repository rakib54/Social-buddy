import React from 'react';

const Comments = (props) => {
    const {email,name} = props.comment
    return (
        <div>
            <h4>{name}:{email}</h4>
        </div>
    );
};

export default Comments;