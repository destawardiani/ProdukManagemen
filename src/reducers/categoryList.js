import { ActionSheetIOS } from "react-native"
import { act } from "react-test-renderer"

const initialState = {
    categoryList: [],
    hasCategory: false,
}

export default (state = initialState, action) => {
    if (action.type == 'SET_CATEGORY_LIST') {
        state.categoryList = action.payload
        state.hasCategory = true
    }
    return state
}