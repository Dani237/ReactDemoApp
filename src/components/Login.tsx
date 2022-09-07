import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean,
    token: String | null,
    username: String,
    name: String
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    name: ''
}

type LoginPayload = {
    username: String,
    name: String
}

type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayload }

const authReduce = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                name: ''
            }
        
        case 'login':
            const { username, name } = action.payload;
            return {
                validando: false,
                token: 'ABCDE',
                username,
                name
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    const [ { validando, token, name }, dispatch] = useReducer(authReduce, initialState);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'DSA',
                name: 'Daniel'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout',
            
        })
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, [])

    if ( validando) {
        return (
            <>
                <h2>Login</h2>

                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h2>Login</h2>

            {
                ( token )
                    ? <div className="alert alert-success">Autenticado: { name }</div>
                    : <div className="alert alert-danger">No Autenticado</div>
            }

            {
                ( token )
                ? 
                <button className="btn btn-danger"
                    onClick={ logout }>
                    Logout
                </button>
                :
                <button className="btn btn-primary"
                    onClick={ login }>
                    Login
                </button>
            }

            
            
        </>
    )
}