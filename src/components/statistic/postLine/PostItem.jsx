import React from 'react';
import './../postLine/postList.css';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <div className='post__header'>
                    <div>{props.post.mail}</div>
                    <div>{props.number}</div>
                </div>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.body}
                    {props.post.photo}
                </div>
            </div>
            <div className='post__btns'>
                <button className='post__btns__take'>Take order</button>
            </div>
        </div>
    );
};

export default PostItem;