import React, { Component } from "react";

import { SupplierTable } from "./SupplierTable";
import { SupplierEditor } from "./SupplierEditor";

export class SupplierDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedSupplier: null
        }
    }

    startEditing = (supplier) => {
        this.setState({ showEditor: true, selectedSupplier: supplier })
    }

    createSupplier = () => {
        this.setState({ showEditor: true, selectedSupplier: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedSupplier: null })
    }

    saveSupplier = (supplier) => {
        this.props.saveCallback(supplier);
        this.setState({ showEditor: false, selectedSupplier: null })
    }

    render() {
        if (this.state.showEditor) {
            return <SupplierEditor
                key={this.state.selectedSupplier.id || -1}
                supplier={this.state.selectedSupplier}
                saveCallback={this.saveSupplier}
                cancelCallback={this.cancelEditing}
            />
        } else {
            return <div className="m-2">
                <SupplierTable
                    suppliers={this.props.suppliers}
                    editCallback={this.startEditing}
                    deleteCallback={this.props.deleteCallback}
                />
                <div className="text-center">
                    <button className="btn btn-primary m-1"
                        onClick={this.createSupplier}>
                        Create Supplier
                    </button>
                </div>
            </div>
        }
    }
}