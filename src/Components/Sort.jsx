import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux';
import { sortItem } from '../actions/item';

export default function Sort(){

    const [compare, setCompare] = useState({
        title: "name",
        level: "asc",
      });

    const dispatch = useDispatch()  
    

    const handleChangeSort = (title,level) => {
        // console.log(title , level);
        setCompare({
            title : title,
            level : level
        })
        const compareSort = {
            title : title,
            level : level
        }
        dispatch(sortItem(compareSort))
    }



    return(
        // 
        <>
            <Dropdown className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{display:"flex"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>handleChangeSort("name","asc")}>Name ASC</Dropdown.Item>
                    <Dropdown.Item onClick={()=>handleChangeSort("name" ,"desc")}>Name DESC</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={()=>handleChangeSort("level","asc")}>Level ASC</Dropdown.Item>
                    <Dropdown.Item onClick={()=>handleChangeSort("level" ,"desc")}>Level DESC</Dropdown.Item>
                </Dropdown.Menu>
                <div className="sort-by"><span className="label label-success label-medium">{compare.title} - {compare.level}</span></div>
            </Dropdown> 

        </>
    )
}