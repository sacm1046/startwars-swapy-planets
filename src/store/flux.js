const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            isAuth: false,
            username: "sacm",
            password: "123"
        },
        actions: {
            logout: history => {
                setStore({
                    isAuth: false
                })
                localStorage.removeItem('isAuth')
                history.push('/login')
            },
            login: history => {
                setStore({
                    isAuth: true
                })
                localStorage.setItem('isAuth', JSON.stringify(true))
                history.push('/planets')
            },
            isAuth: () => {
                localStorage.getItem('isAuth') &&
                    setStore({ isAuth: JSON.parse(localStorage.getItem('isAuth')) })
            }
        }






    }
}
export default getState;