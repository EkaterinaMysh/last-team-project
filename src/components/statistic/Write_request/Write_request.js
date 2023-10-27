import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Write_request.css';
import {fa, login, send_post} from "../../../actions/user";
import Input from "../../../utils/Input";
import {NavLink} from "react-router-dom";

const Write_request = () => {

    const [Title, setTitle] = useState("")
    const [Descr, setDescr] = useState("")
    const [Coins, setCoins] = useState("")
    const dispatch = useDispatch()

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
                        <Input value={Coins} setValue={setCoins} type="number" id="coins" className="wr_coins"></Input>
                    </div>
                    <div className={""}>

                        <button className=""  onClick={event => {
                            event.preventDefault();
                            dispatch(send_post(Title, Descr, Coins));
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