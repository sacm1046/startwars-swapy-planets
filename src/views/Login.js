import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { toast } from 'react-toastify';

const Login = ({ history }) => {
    
    const { store, actions } = useContext(Context);

    const [login, setLogin] = useState({
        user: "",
        pass: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!login.pass || !login.user) {
            toast('Usuario y contraseña obligatorios', { type: 'error', autoClose: 1500 })
        } else if (store.username !== login.user) {
            toast('Usuario incorrecto', { type: 'error', autoClose: 1500 })
        } else if (store.password !== login.pass) {
            toast('Contraseña incorrecta', { type: 'error', autoClose: 1500 })
        } else {
            actions.login(history)
            toast('Ingreso exitoso', { type: 'success', autoClose: 1500 })
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3"></div>
                <div className="col-12 col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h3 className="text-muted">Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="form-group input-group">
                                    <div className="input-group-text bg-ligth">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        value={login.user}
                                        onChange={e => setLogin({ ...login, user: e.target.value })}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-text bg-ligth">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        value={login.pass}
                                        onChange={e => setLogin({ ...login, pass: e.target.value })}
                                        className="form-control"
                                    />
                                </div>
                                <button className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3"></div>
            </div>
        </div>
    )
}

export default Login;