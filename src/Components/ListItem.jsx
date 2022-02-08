import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import axios from 'axios'
import { HTTP_API } from "../helpers/globals";
import { getListItem } from "../actions/item";

export default function ListItem(){
    
    const Itemlist = useSelector(state => state.item.list)

    const dispatch = useDispatch()

    useEffect(() =>{
       axios.get(`${HTTP_API}/all`)
       .then(res =>{
           dispatch(getListItem(res.data))
       })
       .catch(err =>{
           console.log(err);
       })
    },[dispatch])


    return(
        
        <div className="panel panel-success ">
                    <div className="panel-heading card-header">List Item</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">#</th>
                                <th>Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { Itemlist.length !== 0 ? (
                               Itemlist.map((item,key) =>
                               <Item 
                               item={item} 
                               key={key} 
                               index={key}   
                               ></Item>
                               )
                            ) : (
                                <tr>
                                    <td colSpan="4"><h3>List Empty</h3></td>
                                </tr>
                            )
                                    
                            }
            
                        </tbody>
                    </table>
        </div>
    )
}