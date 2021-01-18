
export const change_price = ({payload}) => {
    return {
        type:"CHANGE_PRICE",
        payload:payload
    }
}

export const product_category = ({payload}) => {
    return {
        type:'CHANGE_CATEGORY',
        payload: payload
    }
}

export const display_info = ({payload}) => {
    return {
        type: 'SHOW_INFO',
        payload:payload
    }
}

export const close_info = () => {
    return {
        type:'CLOSE_INFO'
    }
}
