import { DISPLAY_LIST, DISPLAY_LIST_FAILURE, DISPLAY_LIST_SUCCESS } from "./constant"

export const displayList = () =>({
        type: DISPLAY_LIST
})
export const displayListSuccess = (successData) =>({
    type: DISPLAY_LIST_SUCCESS,
    payload: successData
})
export const displayListFailure = (error) =>({
    type: DISPLAY_LIST_FAILURE,
    payload: {error}
})