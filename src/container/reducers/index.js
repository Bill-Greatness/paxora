import {combineReducers} from 'redux'

const priceReducer = (state = 100, action) => {
    switch(action.type){
        case "CHANGE_PRICE":
            return state = action.payload
        default:
            return state
    }
}

const productReducer = (state = "All", action) => {
    switch(action.type){
        case "CHANGE_PRODUCT":
            return state = action.payload
        default:
            return state
    }
}

const showProduct = (state = false, action) => {
    switch(action.type){
        case 'SHOW_INFO':
            return !state
        case 'CLOSE_INFO':
            return state
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    price:priceReducer,
    products:productReducer,
    show_info:showProduct
})

 