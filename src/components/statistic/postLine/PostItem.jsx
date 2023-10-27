import React from 'react';
import './../postLine/postList.css';
import {NavLink} from "react-router-dom";
import {setPostExec, setPostNotExec} from "../../../reducers/postReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {take_post} from "../../../actions/user";


const PostItem = (props) => {
    const dispatch = useDispatch()
    let userr = useSelector(state => state.user.currentUser)
    const log = props.post.ownerLogin
    //const userr = props.user.currentUser
    let id
    if (log === userr) {
        //id_1 = true
         id = '/user/' + props.post.ownerLogin
    }
    else {
        id = '/users/' + props.post.ownerLogin
    }
    //alert(id)
    //const id = id_1 + props.post.ownerLogin

    const id_post = props.post.id
    if (props.post.reward===0 || props.post.status === "Closed" || props.post.status === "Done" || props.post.status === "Executing"){
        return(
        <div className='post'>
            <div className='post__content'>
                <div className='post__header'>
                    <NavLink to={id}>{props.post.ownerLogin}</NavLink>
                    <div>{props.number}</div>
                </div>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.description}
                    {props.post.photo}
                </div>
            </div>
        </div>)
    }
    if (props.post.reward>0) {

        return(
            <div className='post'>
                <div className='post__content'>
                    <div className='post__header'>
                        <NavLink to={id}>{props.post.ownerLogin}</NavLink>
                        <div>{props.number}</div>
                    </div>
                    <strong>{props.post.title}</strong>
                    <div>

                        {props.post.description}
                        {props.post.photo}
                    </div>

                </div>
                <div className='post__btns'>
                    <button className='post__btns__take' onClick={() => dispatch(take_post(id_post))}>Take order</button>
                </div>
            </div>
        )
    }

};

export default PostItem;

