import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class DrugsComponent extends Component {
  state = {
    open: false,
    itemId: null
  };

  handleOpen = event => {
    this.setState({ open: true });
    let tag = event.target;
    console.log(event.target);
    let val = tag.getAttribute('value');
    let valNum = parseInt(val, 10);
    console.log(tag, val, valNum);
    this.setState({ itemId: valNum });
  };

  handleClose = event => {
    this.setState({ open: false });
  };
  handleSubmit = event => {
    this.setState({ open: false });

    console.log(this.state.itemId);
    this.props.onRemoveItem(this.state.itemId);
  };

  render() {
    const style = {
      textAlign: 'center'
    };
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Submit" primary={true} onClick={this.handleSubmit} />
    ];
    if (this.props.items && Array.isArray(this.props.items)) {
      return (
        <div className="DrugsComponent">
          <Table
            className="bordered highlight centered"
            onCellClick={this.handleCellClick}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Generic Name
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Brand Name
                </TableHeaderColumn>
                <TableHeaderColumn
                  style={{
                    fontSize: '20px',
                    width: '300px'
                  }}>
                  Indications
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Action
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Action
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.items.map((item, index) =>
                <TableRow key={index} rowNumber={this.rowNumber}>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    {item.generic}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    {item.brand}
                  </TableRowColumn>
                  <TableRowColumn
                    style={{
                      fontSize: '15px',
                      width: '300px'
                    }}>
                    {item.indications}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    {/* <RaisedButton
                      onClick={this.handleRemove}
                      label="Remove"
                      labelColor="#ffffff"
                      backgroundColor="#1E88E5"
                      style={style}
                    /> */}
                    <div>
                      {/* <RaisedButton
                        label="Remove"
                        value={item.id}
                        onClick={this.handleOpen}
                      /> */}
                      <a
                        value={item.id}
                        className="waves-effect waves-light btn light-blue lighten-1"
                        onClick={this.handleOpen}
                        style={{ margin: 'auto' }}>
                        REMOVE
                      </a>
                      <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        overlayStyle={{
                          backgroundColor: 'lightgray',
                          opacity: 0.1
                        }}>
                        Are you sure you want to delete this drug from the list?
                      </Dialog>
                    </div>
                    {/* <a
                      href="."
                      value={item.id}
                      className="waves-effect waves-light btn light-blue accent-4"
                      onClick={this.handleRemove}
                      style={{ margin: 'auto' }}>
                      REMOVE
                    </a> */}

                    {console.log(item.id, index)}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    <RaisedButton
                      href={`#/drugs/${item.id}`}
                      label="Edit"
                      labelColor="#ffffff"
                      backgroundColor="#29b6f6"
                      style={style}
                    />
                  </TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <br />
          <br />
        </div>
      );
    } else {
      return <div>...LOADING, PLEASE WAIT</div>;
    }
  }

  //Table Properties - onCellClick	- function
  //Called when a row cell is clicked. rowNumber is the row number
  //and columnId is the column number or the column key.

  // handleCellClick = rowNumber => {
  //   console.log(rowNumber);
  //   this.handleRemove = event => {
  //     event.preventDefault();
  //     console.log(rowNumber);
  //     this.props.onRemoveItem(this.props.items[rowNumber].id);
  //   };
  // };

  // handleRemove = event => {
  //   event.preventDefault();
  //   this.handleCellClick = rowNumber => {
  //     console.log(rowNumber);
  //     this.props.onRemoveItem(this.props.items[rowNumber].id);
  //     console.log(rowNumber);
  //   };
  // };

  //TableRow Properties - rowNumber	- number
  //Number to identify the row. This property is automatically populated
  //when used with the TableBody component.

  handleRemove = event => {
    event.preventDefault();

    let tag = event.target;

    let val = tag.getAttribute('value');
    let valNum = parseInt(val, 10);
    console.log(tag, val, valNum);

    this.props.onRemoveItem(valNum);
  };
}
export default withRouter(DrugsComponent);
