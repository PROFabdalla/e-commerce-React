export const additem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}
export const delitem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}