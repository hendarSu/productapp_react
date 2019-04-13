import React, { Component } from "react";

export class SupplierEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromData: {
                id: props.supplier.id || "",
                name: props.supplier.name || "",
                city: props.supplier.city || "",
                products: props.supplier.products || []
            }
        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => state.fromData[ev.target.name] = ev.target.name === "products" ? ev.target.value.split(", ") : ev.target.value)
    }

    handleClik = () => {
        this.props.saveCallback({
            ...this.state.fromData,
            products : this.state.fromData.products.map(val => Number(val))
        });
    }

    render() {
        return <div className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" name="id" disabled
                    value={this.state.fromData.id} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="name" 
                    value={this.state.fromData.name} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>City</label>
                <input className="form-control" name="city" 
                    value={this.state.fromData.city} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Products</label>
                <input className="form-control" name="products" 
                    value={this.state.fromData.products} onChange={this.handleChange} />
            </div>
            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={this.handleClik}>
                    Save
                </button>
                <button className="btn btn-secondary"
                    onClick={this.props.cancelCallback}>
                    Cancel
                </button>
            </div>
        </div>
    }
}