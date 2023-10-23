import React from 'react';
import './../postLine/postList.css';
import {NavLink} from "react-router-dom";


const PostItem = (props) => {
    const id = '/user/'+props.post.mail
    return (
        <div>
        {(props.post.typ)?
        <div className='post'>
            <div className='post__content'>
                <div className='post__header'>
                    <NavLink to={id}>{props.post.mail}</NavLink>
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
        </div>:
            <div className='post'>
                <div className='post__content'>
                    <div className='post__header'>
                        <NavLink to={id}>{props.post.mail}</NavLink>
                        <div>{props.number}</div>
                    </div>
                    <strong>{props.post.title}</strong>
                    <div>
                        {props.post.body}
                        {props.post.photo}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default PostItem;