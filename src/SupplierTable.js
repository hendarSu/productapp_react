import React, { Componet } from "react";
import { SupplierTableRow } from './SupplierTableRow';

export class SupplierTable extends Componet {

    render() {
        return <table className="table table-striped table-sm table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Products</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.suppliers.map(s =>
                        <SupplierTableRow products={s}
                            key={s.id}
                            editCallback={this.props.editCallback}
                            deleteCallback={this.props.deleteCallback}
                        />)
                }
            </tbody>
        </table>
    }
}