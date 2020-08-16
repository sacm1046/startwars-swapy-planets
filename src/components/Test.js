import React from 'react';

const Test = () => {
    return (
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
}

export default Test;
