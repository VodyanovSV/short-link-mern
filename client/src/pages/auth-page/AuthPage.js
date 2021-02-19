import React from 'react'
import styles from './AuthPage.module.scss'
import {useHttp} from "../../hooks/http.hook";


export const AuthPage = () => {
	
	const {loading, request, error, clearError} = useHttp()
	const [form, setForm] = useState({email: '', password: ''})

    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }	
	
	const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {

        }
    }
	
	
	return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className={'input-field ' + styles.myInputField}>
                                <input
                                    placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className={styles.myStyleInput}
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label className={'active ' + styles.myStyleLable} htmlFor="email">Email</label>
                            </div>
                            <div className={'input-field ' + styles.myInputField}>
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className={styles.myStyleInput}
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label className={'active ' + styles.myStyleLable} htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className="btn green lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
	)
}