import {UserIe} from '../reducers/UserReducer'
import {login} from '../actions/UserActions'
export const LoginThunks:any=(user:UserIe)=>{
    return (dispatch,getState)=>{
        let z=getState();
        debugger
        dispatch(login(user));
    }
}