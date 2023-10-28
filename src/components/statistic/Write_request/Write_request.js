import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Write_request.css';
import {fa, getInfoCurUs, login, send_post} from "../../../actions/user";
import {getLeftPost} from "../../../actions/stat"
import Input from "../../../utils/Input";
import {NavLink} from "react-router-dom";
import {getExecUsersPost, getUsersPost} from "../../../actions/stat";
import * as PropTypes from "prop-types";


const Write_request = () => {
    let size
    const level = useSelector(state => state.user.level)
    if (level < 3){
        size=3
    }
    else if (level < 5)
    {
        size = 5
    }
    else size = 7
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getLeftPost())

    }, [])
    const left = useSelector(state => state.user.left)
    //let left = 0
    let count_left = false
    if (left === 0) count_left = true

    const [Title, setTitle] = useState("")
    const [Descr, setDescr] = useState("")
    const [Pay, setPay] = useState(true)
    const [Coins, setCoins] = useState("")
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (

        <div className="main__screen_wr">

            <div className="main">

                <form className="form_for_request">
                    <p className="title_request">Ваше поручение</p>
                    <div className="text_request">
                        <Input value={Title} setValue={setTitle} id="text" placeholder="Заголовок" className="for_textarea" ></Input>
                    </div>
                    <div className="text_request">
                        <Input id="text" value={Descr} setValue={setDescr} placeholder="Описание поручения" className="for_textarea" ></Input>
                    </div>
                    <div className="coins">
                        <h4>Сколько А-монет будет списано за поручение?</h4>
                        <p className="how_many">Поставьте в поле значение 0, если хотите написать обычный пост, а не запрос.</p>
                        <Input value={Coins} setValue={setCoins} type="number" id="coins" className="wr_coins"></Input>
                    </div>
                    <div className="text_request">
                        <p>Обычных постов можно написать:{left}/{size}</p>
                    </div>
                    {(count_left)?
                        <div className="fl__wi__send__div">
                        <input type="checkbox" onChange={handleChange} checked={checked} className="checkbox__pay"></input>
                        <p className="text_checkbox">Потратить 5 Б-монет, чтобы выложить обычный пост</p>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="fl__wi__send__div">

                        <button className='fl__wi__send'   onClick={event => {
                            event.preventDefault();

                            dispatch(send_post(Title, Descr, Coins, checked));
                        }}>Отправить</button>
                    </div>

                </form>

                <footer className="main__footer">
                    <div className="main__footer__content">
                        Рябеево, Тверская обл., 170524
                    </div>
                </footer>
            </div>
        </div>

    );

}

export default Write_request;