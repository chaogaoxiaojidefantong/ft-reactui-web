import {loginActionType} from '../ActionTypes/UserTypes'
import {UserIe} from '../reducers/UserReducer'
export type LoginActionIe={
    type:string;
    payload:UserIe
}
export const login=(user:UserIe):LoginActionIe=>{
    return {
        type:loginActionType,
        payload:user
    }
}
export const loginGo=(user:UserIe):LoginActionIe=>{
    return {
        type:loginActionType,
        payload:user
    }
}