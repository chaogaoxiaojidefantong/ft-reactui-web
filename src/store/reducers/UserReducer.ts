import {loginActionType} from '../ActionTypes/UserTypes'
import {LoginActionIe} from '../actions/UserActions'
export interface UserIe{
    userName:string,
    age:number
}
const initialState={
    userName:'xiaosan',
    age:1
}
export default function(state = initialState, action:LoginActionIe){
    switch(action.type){
        case loginActionType:{
            const {userName,age}=action.payload
            return{
                ...state,...action.payload
            }
        }
        default:
        return state;
    }
    
}