import React from 'react';
import './../postLine/postList.css';
import {NavLink} from "react-router-dom";
import {setPostExec, setPostNotExec} from "../../../reducers/postReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {take_post, complete_offer, close_offer, raise_priority, delete_post} from "../../../actions/user";


const PostItemUser = (props) => {
    const dispatch = useDispatch()
    let userr = useSelector(state => state.user.currentUser)
    const log = props.post.ownerLogin

    let login
    login = window.location.pathname
    //console.log(login)
    login = login.slice(1)
    //console.log(login)
    //console.log(login.indexOf("/"))
    login = login.slice(login.indexOf("/")+1)

    //console.log("login: ", login)
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
    const owner = props.post.ownerLogin
    const id_post = props.post.id
    //alert(props.post.status)
    let count_open
    if (props.post.status === "Open"){
        count_open = true
    } else count_open = false
    let count_done
    if (props.post.status === "Done"){
        count_done = true
    } else count_done = false
   // console.log("count_done: ", count_done)
    let count_closed
    if (props.post.status === "Closed"){
        count_closed = true
    } else count_closed = false
   // console.log("count_closed: ", count_closed)
    let count_exec
    if (props.post.status === "Executing"){
        count_exec = true
    } else count_exec = false
    //console.log("count_exec: ", count_exec)
    let count_0
    if (props.post.reward===0){
        count_0 = true
    } else count_0 = false
   // console.log("count_0: ", count_0)
    let count_not0
    if (props.post.reward > 0){
        count_not0 = true
    } else count_not0 = false
    //console.log("count_not0: ", count_not0)
    let count_owner
    if (owner===userr) {
        count_owner = true
    } else  count_owner = false
    //console.log("count_owner: ", count_owner)
    //console.log(owner===userr)
    //console.log("owner: ", owner)
    let count_execuser
    if (props.post.executorLogin===userr) {
        count_execuser = true
    } else count_execuser = false
    let count_page
    if (login===userr) {
        count_page = true
    } else count_page = false
    //console.log("count_execuser: ", count_execuser)
    //console.log("props.post.executorLogin: ", props.post.executorLogin)

    return (
        <div className='post'>
            <div className='post__content'>
                <div className='post__header'>
                    <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                </div>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.description}

                </div>
                {
                    (count_page && count_owner && count_0)?
                        <div className="buttons_st">
                            <button className='raisepr__bt'   onClick={() => dispatch(raise_priority(id_post))}>Повысить приоритет</button>
                            <button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>
                        </div>
                        :
                        <div></div>

                }
                {
                    (count_page && count_owner && count_not0)?
                        (count_done)?
                            <div className="buttons_st">
                                <button className='closerq__bt'  onClick={() =>  dispatch(close_offer(id_post))}>Закрыть</button>
                            </div>
                            :
                            (count_closed)?
                                <div className="buttons_st">
                                    <button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>
                                </div>
                                :
                                (count_open)?
                                    <div className="buttons_st">
                                        <button className='raisepr__bt'   onClick={() => dispatch(raise_priority(id_post))}>Повысить приоритет</button>
                                        <button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>
                                    </div>
                                        :
                                    (count_exec)?
                                        <div className="buttons_st">
                                        </div>
                                        :
                                        <div></div>
                        :
                        <div></div>

                }
                {
                    (count_page && count_execuser && count_not0)?
                        <div className="buttons_st">
                            <button className='deleterq__bt' onClick={() => dispatch(complete_offer(id_post))}>Завершить</button></div>
                        :
                        <div></div>
                }


            </div>

        </div>
    )
    /*
    if (){
<div className="buttons_st">

                        </div>
                        :
                        <div></div>
    }
<button className='raisepr__bt'   onClick={() => dispatch(raise_priority(id_post))}>Повысить приоритет</button>
<button className='closerq__bt'  onClick={() =>  dispatch(close_offer(id_post))}>Закрыть</button>
<button className='deleterq__bt' onClick={() => dispatch(complete_offer(id_post))}>Завершить</button>
<button className='post__btns__take' onClick={() => dispatch(take_post(id_post))}>Take order</button>
<button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>

    if (props.post.status === "Done"){
        return(
        <div className='post'>
            <div className='post__content'>
                <div className='post__header'>
                    <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>
                </div>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.description}

                </div>

            </div>
        </div>)
    }
    if (props.post.status === "Closed"){
        return(
            <div className='post'>
                <div className='post__content'>
                    <div className='post__header'>
                        <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                    </div>
                    <strong>{props.post.title}</strong>
                    <div>
                        {props.post.description}

                    </div>
                </div>
            </div>)
    }
    if (owner===userr){
        if (props.post.reward===0) {
            return (
                <div className='post'>
                    <div className='post__content'>
                        <div className='post__header'>
                            <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                        </div>
                        <strong>{props.post.title}</strong>
                        <div>
                            {props.post.description}
                        </div>
                        <button onClick={() => dispatch(raise_priority(id_post))}>Повысить приоритет</button>
                        <button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>
                    </div>
                </div>
            )
        } else
        if (props.post.status === "Done")
        {
            return (
                <div className='post'>
                    <div className='post__content'>
                        <div className='post__header'>
                            <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                        </div>
                        <strong>{props.post.title}</strong>
                        <div>
                            {props.post.description}

                        </div>
                        <button className='closerq__bt'  onClick={() =>  dispatch(close_offer(id_post))}>Закрыть</button>

                    </div>
                </div>
            )

        }else if (props.post.status === "Executing")
        {
            return (
                <div className='post'>
                    <div className='post__content'>
                        <div className='post__header'>
                            <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                        </div>
                        <strong>{props.post.title}</strong>
                        <div>
                            {props.post.description}

                        </div>

                    </div>
                </div>
            )

        }else
            if (props.post.status === "Closed")
        {return (
            <div className='post'>
                <div className='post__content'>
                    <div className='post__header'>
                        <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                    </div>
                    <strong>{props.post.title}</strong>
                    <div>
                        {props.post.description}

                    </div>
                    <button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>

                </div>
            </div>
        )}
            else {
            return (
                <div className='post'>
                    <div className='post__content'>
                        <div className='post__header'>
                            <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                        </div>
                        <strong>{props.post.title}</strong>
                        <div>

                            {props.post.description}

                        </div>
                        <div className="buttons_st">
                        <button className='raisepr__bt'   onClick={() => dispatch(raise_priority(id_post))}>Повысить приоритет</button>
                            <button className='deleterq__bt' onClick={() => dispatch(delete_post(id_post))}>Удалить пост</button>
                        </div>
                    </div>

                </div>
            )
        }



    }
    if (userr === props.post.executorLogin) {
        return (
            <div className='post'>
                <div className='post__content'>
                    <div className='post__header'>
                        <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                    </div>
                    <strong>{props.post.title}</strong>
                    <div>

                        {props.post.description}

                    </div>

                    <button className='deleterq__bt' onClick={() => dispatch(complete_offer(id_post))}>Завершить</button>

                </div>

            </div>
        );
    }
    return (
        <div>
            {(props.post.reward)?
                <div className='post'>
                    <div className='post__content'>
                        <div className='post__header'>
                            <NavLink className="login__name" to={id}>{props.post.ownerLogin}</NavLink>

                        </div>
                        <strong>{props.post.title}</strong>
                        <div>

                            {props.post.description}

                        </div>

                    </div>
                    <div className='post__btns'>
                        <button className='post__btns__take' onClick={() => dispatch(take_post(id_post))}>Take order</button>
                    </div>
                </div>:
                <div className='post'>
                    <div className='post__content'>
                        <div className='post__header'>
                            <NavLink to={id}>{props.post.ownerLogin}</NavLink>
                            <div>{props.number}</div>
                        </div>
                        <strong>{props.post.title}</strong>
                        <div>
                            {props.post.description}

                        </div>
                    </div>
                </div>}
        </div>
    );
*/


};

export default PostItemUser;