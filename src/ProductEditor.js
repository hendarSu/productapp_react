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
   
}