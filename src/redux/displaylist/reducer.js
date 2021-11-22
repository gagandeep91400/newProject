import { DISPLAY_LIST, DISPLAY_LIST_SUCCESS, DISPLAY_LIST_FAILURE } from "./constant"

const initialState = {
    inProgress : false,
    isSuccess : false,
    isError : false,
    successData : '',
    error : ''
}

export const displayListReducer = (state = initialState , {type, payload}) => {
 switch(type){
    case DISPLAY_LIST :
        return{
            ...state,
            isProgress: true
        }
    case DISPLAY_LIST_SUCCESS :
            return{
                ...state,
                isProgress: false,
                isSuccess: true,
                successData: payload
            }
    case DISPLAY_LIST_FAILURE :
                return{
                    ...state,
                    isProgress: false,
                    isSuccess: false,
                    error: true
                }
    default:
        return state

 }

}
export default displayListReducer

