import { useDispatch } from "react-redux"
import { searchItem } from "../actions/item";

export default function Search(){
    

    const dispatch = useDispatch()

    //tim kiếm
    const actionSearch = (e) => {
        const value = e.target.value;
        const search = new RegExp (value , 'i')
        dispatch(searchItem(search)) 
    }

 
    return(
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search item name" id="input-search"  onChange={actionSearch}/>
                        </div>
        </div>
    )
}