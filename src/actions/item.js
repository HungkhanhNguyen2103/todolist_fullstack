export const getListItem = (value) => {
    return {
        type : 'GET_LIST',
        payload : value,
    }
}

export const addNewItem = (item) => {
    return {
        type : 'ADD_ITEM',
        payload : item,
    }
}

export const deleteItem = (item) =>{
    return{
        type : 'DELETE_ITEM',
        payload : item
    }
}

export const editItem = (item) =>{
    return{
        type : 'EDIT_ITEM',
        payload : item
    }
}

export const searchItem = (item) =>{
    return{
        type : 'SEARCH_ITEM',
        payload : item
    }
}

export const sortItem = (item) =>{
    return{
        type : 'SORT_ITEM',
        payload : item
    }
}