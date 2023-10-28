import React from 'react';
import PostItem from "./PostItem";
import PostItemUser from "./PostItemUser";
import './../postLine/postList.css';
import {useSelector} from "react-redux";


const PostList = ({post, title}) => {
    let login = window.location.pathname
    login = login.slice(1,2)


    //alert(login)
    if (login==='h')
    {
        return (
        <div className='list__post'>
            <h1 className='list__post__title'>{title}</h1>
            {post.map((post, index)=>
            <PostItem number={index + 1} post={post} key={post.id}/>

            )}
        </div>
    );}
    else {
        if (login==='u'){
            return (
                <div className='list__post'>
                    <h1 className='list__post__title'>{title}</h1>
                    {post.map((post, index)=>
                        <PostItemUser number={index + 1} post={post} key={post.id}/>

                    )}
                </div>
            );
        }

    }
    return (
        <div className='list__post'>
            <h1 className='list__post__title'>{title}</h1>
            {post.map((post, index)=>
                <PostItem number={index + 1} post={post} key={post.id}/>

            )}
        </div>
    )
};

export default PostList;