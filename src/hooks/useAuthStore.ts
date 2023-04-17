import { useSelector, useDispatch } from 'react-redux';
import { genesisApi } from '../api/genesisApi';
import { cleanErrorMessage, onChecking, onLogin, onLogout} from '../store/auth/authSlice';
import { AlertSweetalert } from '../commons/AlertSweetalert';
export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async(payload:any)=>{
        dispatch(onChecking())
        try {
            const {data} = await genesisApi.post('/login', payload);
            localStorage.setItem('token', data.token)
            dispatch(onLogin({fullname: data['fullName'], uid: data.id}))
          } catch (error) {
            AlertSweetalert("Error",error.response.data.message, "error","ERROR");
            dispatch(onLogout(error.response.data.message));
            setTimeout(()=>{
                dispatch(cleanErrorMessage())
            }, 10)
          }
    }

    const startLogout=()=>{
      localStorage.clear();
      dispatch(onLogout(undefined))
    }

    const startRegister = async(data:any)=>{
        dispatch(onChecking())
        try {
            const resp = await genesisApi.post('/register', data);
            dispatch(onLogin(resp.data))
            AlertSweetalert("Bien","Tu registro fue exitoso.", "success","OK");
          } catch (error) {
            AlertSweetalert("Error",error.response.data.message, "error","ERROR");
            dispatch(onLogout(error.response.data.message));
            setTimeout(()=>{
                dispatch(cleanErrorMessage())
            }, 10)
          }
    }

    const checkAuthToken = async()=>{
      const token = localStorage.getItem('token');
      if(!token) return dispatch (onLogout(""));
      try {
        const {data} = await genesisApi.get('/renew');
        localStorage.setItem('token', data.token)
        dispatch(onLogin({fullname: data['fullName'], uid: data.id}))
      } catch (error) {
        localStorage.clear()
        dispatch(onLogout(error.response.data.message));
      }
    }

    return {
        status, 
        user, 
        errorMessage,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}
