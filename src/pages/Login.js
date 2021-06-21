import { useHistory } from "react-router-dom";

const Login = ({setLogin}) => {
    const history = useHistory();
    return <div>
        <h2>Halaman Login</h2>
        <p>
            <button onClick={() => { setLogin(true) 
                history.push('/') }}>Login</button>
        </p>
    </div>
}

export default Login;