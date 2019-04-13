import React,{ Component } from "react";

export class ProductEditor extends Component {
   constructor(props){
       super(props);
       this.state = {
           fromData: {
               id : props.product.id || "",
               name: props.product.name || "",
               category: props.product.category || "",
               price: props.product.price || ""
           }
       }
   }

   handleChange = (ev) => {
       ev.persist();
       this.setState( state => state.fromData[ev.target.name] = ev.target.value )
   }

   handleClik = () => {
       this.props.saveCallback(this.state.fromData);
   }

   render(){
       return <div  className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" name="id" disabled
                value={ this.state.fromData.id } onChange={ this.handleChange } />
            </div>
           <div className="form-group">
               <label>Name</label>
               <input className="form-control" name="name"
                   value={this.state.fromData.name} onChange={this.handleChange} />
           </div>
           <div className="form-group">
               <label>Category</label>
               <input className="form-control" name="category"
                   value={this.state.fromData.category} onChange={this.handleChange} />
           </div>
           <div className="form-group">
               <label>Price</label>
               <input className="form-control" name="price"
                   value={this.state.fromData.price} onChange={this.handleChange} />
           </div>
           <div className="text-center">
                <button className="btn btn-primary m-1" onClick={ this.handleClik }>
                    Save
                </button>
                <button className="btn btn-secondary"
                    onClick={ this.props.cancelCallback }>
                    Cancel
                </button>
           </div>
        </div>
   }
}