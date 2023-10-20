import React from 'react';
import PostItem from "./PostItem";
import './../postLine/postList.css';

const PostList = ({post, title}) => {
    return (
        <div className='list__post'>
            <h1 className='list__post__title'>{title}</h1>
            {post.map((post, index)=>
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;