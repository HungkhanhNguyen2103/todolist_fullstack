import { useState } from "react";
import { useDispatch} from "react-redux";
import swal from "sweetalert";
import { editItem } from "../actions/item";

export default function EditItem(props){

    //field Edit
    const [itemSelected,setItemSelected] = useState(props.item)

    //dispatch
    const dispatchItem = useDispatch()

    //thay dôi input edit
    const onChangeSelected = (e) => {
        const {name,value} = e.target;
        setItemSelected({
            ...itemSelected,
            [name] : value,
        })
        
    }

    //save edit
    const handleSave=()=>{
    
        swal({
            title: "Lưu thành công!",
            icon: "success",
            button: "OK",
        });
        props.handleEdit()
        const actionEdit = editItem(itemSelected)
        // console.log(actionEdit);
        dispatchItem(actionEdit)
        setTimeout(() => {
            window.location.reload()
        }, 1600);
    }

    return (
        <>
            {
            !props.toggleEdit ? (
                 <></>
            ) : (

                <tr >
                    <td className="text-center">{props.index}</td>
                    <td><input type="text" className="form-control" defaultValue={props.item.taskname} name="taskname" onChange={onChangeSelected}/></td>
                    <td className="text-center">
                        <select className="form-control" name="level" defaultValue={props.item.level} onChange={onChangeSelected}>
                            <option value={"0"}>Small</option>
                            <option value={"1"}>Medium</option>
                            <option value={"2"}>High</option>
                        </select>
                    </td>
                    <td >
                        <button type="button" className="btn btn-link btn-sm" onClick={props.handleEdit}>Cancel</button>
                        <button type="button" className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
                    </td>
                </tr>             
        
            )
            }      
        </>
    )
}