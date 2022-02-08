import EditItem from "./EditItem"
import { useState } from "react"
import swal from 'sweetalert';
import { useDispatch } from "react-redux";
import { deleteItem } from "../actions/item";

export default function Item(props){
 
    //dispatch 
    const dispatchItem = useDispatch()

    const [toggleEdit,setToggleEdit] = useState(false)

    const handleEdit=()=>{      
         setToggleEdit(!toggleEdit)   
    }

    //xoa item
    const handleDelete=(taskSelect)=>{
        console.log(taskSelect);
        swal({
            title: "Bạn có muốn xóa: " + taskSelect.taskname + " ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
           })
           .then((willDelete) => {
            if (willDelete) {
              swal({
                title: "Item đã được xóa bỏ",
                icon: "success",
              });
              const actionDelete = deleteItem(taskSelect)
              dispatchItem(actionDelete)
              setTimeout(() => {
                window.location.reload()
            }, 800);
            }
          });
    }
    
    return(
        <>

                     <tr>
                            <td className="text-center">{props.index}</td>
                            <td>{props.item.taskname}</td>
                            <td className="text-center">
                            {
                                props.item.level === "0" ? (
                                    <span className="label_1 success">Small</span>
                                ) : props.item.level === "1" ? (
                                    <span className="label_1 warning">Medium</span>
                                ) :  props.item.level === "2" ? (
                                    <span className="label_1 danger">High</span>
                                ) : (
                                    <></>
                                )
                            }
                            </td>
                            
                            <td className="button-item">
                                <button type="button" className="btn btn-warning btn-sm" onClick={handleEdit}>Edit</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={()=>handleDelete(props.item)}>Delete</button>
                            </td>
                        </tr>       
                   <EditItem
                   handleEdit={handleEdit}
                   toggleEdit={toggleEdit}
                   index={props.index}
                   item = {props.item}
                   />
        </>                
    )
}