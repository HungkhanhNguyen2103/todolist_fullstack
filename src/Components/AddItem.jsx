export default function AddItem(props){
    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        { !props.toggle ? (
                        <button type="button" className="btn btn-info btn-block marginB11" onClick={props.showToggle}>Add Item</button>
                        ) : (
                        <button type="button" className="btn btn-dark btn-block marginB11" onClick={props.showToggle}>Close Form</button>
                         )}
         </div> 
    )
}