import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './CreatePage.module.scss'
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {authorization: `Bearer ${auth.token}`})
                navigate(`/detail/${data.link._id}`)
            } catch (e) {
            }
        }
    }

    return (
        <div className='row'>
            <div className="col s8 offset-s2">
                <div className={'input-field ' + styles.myInputField}>
                    <input
                        placeholder="Вставьте ссылку"
                        id="link"
                        type="text"
                        value={link}
                        className={styles.myStyleInput}
                        onChange={event => setLink(event.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label className={'active ' + styles.myStyleLable} htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}