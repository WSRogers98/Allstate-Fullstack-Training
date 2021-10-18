import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.firstName}</td>
        <td>{this.props.obj.lastName}</td>
        <td>{this.props.obj.city}</td>
        <td>{this.props.obj.zipCode}</td>
        <td>{this.props.obj.dateJoined}</td>
        <td>{this.props.obj.policyCode}</td>
      </tr>
    );
  }
}

export default TableRow;
