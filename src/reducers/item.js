import axios from 'axios'
import { CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, headers } from '../helpers/globals'
import qs from 'qs'
const initialState = {
    listSave: [],
    list: [],
    activeId: null //selected
}


export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST': {
            const newList = [...action.payload]
            return {
                ...state,
                list: newList,
                listSave: newList,
            }
        }
        case 'ADD_ITEM': {
            axios.post(`${CREATE_ITEM}`, qs.stringify(action.payload), {
                headers: headers
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })

            return state;
        }
        case 'DELETE_ITEM': {
            axios.delete(`${DELETE_ITEM + '/' + action.payload._id}`, qs.stringify(action.payload), {
                headers: headers
            }).then(res => {
                console.log(res);
            })
                .catch(err => {
                    console.log(err);
                })
            return state;
        }
        case 'EDIT_ITEM': {
            axios.put(`${EDIT_ITEM + '/' + action.payload._id}`, qs.stringify(action.payload), {
                headers: headers
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
            return state;
        }
        case 'SEARCH_ITEM': {
            state.list = [...state.listSave]
            const newList = [...state.list]
            return {
                ...state,
                list: newList.filter(item => item.taskname.match(action.payload))
            }
        }
        case 'SORT_ITEM': {
            const newList = [...state.list]
            if (action.payload.title === "name") {
                if (action.payload.level === "asc")
                    return {
                        ...state,
                        list: newList.sort((a, b) => (a.taskname > b.taskname ? 1 : -1))
                    }
                if (action.payload.level === "desc")
                    return {
                        ...state,
                        list: newList.sort((a, b) => (a.taskname < b.taskname ? 1 : -1))
                    }
            } else {
                if (action.payload.level === "asc")
                    return {
                        ...state,
                        list: newList.sort((a, b) => (a.level > b.level ? 1 : -1))
                    }
                else return {
                    ...state,
                    list: newList.sort((a, b) => (a.level < b.level ? 1 : -1))
                }
            }
            break;
        }

        default:
            return state;
    }
}