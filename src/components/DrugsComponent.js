import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

function getItemProperty(items, itemId, propertyName) {
  if (!Array.isArray(items)) return '';
  const item = items.find(item => item.id === itemId);
  if (!item) return '';
  return item[propertyName];
}

class DrugsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generic: '',
      brand: '',
      indications: '',
      openRemove: false,
      open: false,
      itemId: null,
      hasValidationError: false
    };
  }
  handleChangeGeneric = event => {
    event.preventDefault();

    this.setState({ generic: event.target.value });
  };
  handleChangeBrand = event => {
    event.preventDefault();

    this.setState({ brand: event.target.value });
  };
  handleChangeIndications = event => {
    event.preventDefault();

    this.setState({
      indications: event.target.value
    });
  };
  handleOpenRemove = event => {
    this.setState({ openRemove: true });
    let tag = event.target;
    console.log(event.target);
    let val = tag.getAttribute('value');
    let valNum = parseInt(val, 10);
    console.log(tag, val, valNum);
    this.setState({ itemId: valNum });
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
    this.setState({ hasValidationError: false });
  };

  handleCloseRemove = event => {
    this.setState({ openRemove: false });
    this.setState({ hasValidationError: false });
  };
  handleSubmit = event => {
    this.setState({ openRemove: false });

    console.log(this.state.itemId);
    this.props.onRemoveItem(this.state.itemId);
  };
  handleEditRx = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    let itemId = this.state.itemId;
    let items = this.props.items;
    console.log(itemId);
    const $form = event.target;
    const generic =
      $form.icon_generic.value.trim() ||
      getItemProperty(items, itemId, 'generic');

    const brand =
      $form.icon_brand.value.trim() || getItemProperty(items, itemId, 'brand');

    const indications =
      $form.icon_indications.value.trim() ||
      getItemProperty(items, itemId, 'indications');

    let regName = /^[a-zA-Z ]{2,30}$/;
    if (generic.match(regName) && brand.match(regName)) {
      this.props.onEditRx(itemId, {
        generic,
        brand,
        indications
      });

      this.setState({ open: false });
    } else {
      this.setState({ hasValidationError: true });
      this.setState({ open: true });
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseRemove}
      />,
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
                    <div>
                      <a
                        value={item.id}
                        className="waves-effect waves-light btn light-blue lighten-1"
                        onClick={this.handleOpenRemove}>
                        REMOVE
                      </a>
                      <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.openRemove}
                        onRequestClose={this.handleCloseRemove}
                        overlayStyle={{
                          backgroundColor: 'lightgray',
                          opacity: 0.1
                        }}>
                        Are you sure you want to delete this drug from the list?
                      </Dialog>
                    </div>

                    {console.log(item.id, index)}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    <div>
                      <a
                        value={item.id}
                        className="waves-effect waves-light btn light-blue lighten-1"
                        onClick={this.handleOpen}>
                        EDIT
                      </a>
                      <Dialog
                        title="EDIT DRUG"
                        titleStyle={{
                          backgroundColor: '#37474f',
                          color: 'white'
                        }}
                        actions={
                          <FlatButton
                            label="Cancel"
                            primary={true}
                            onClick={this.handleClose}
                          />
                        }
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        overlayStyle={{
                          backgroundColor: 'lightgray',
                          opacity: 0.1
                        }}
                        autoScrollBodyContent={true}>
                        <form className="col s12" onSubmit={this.handleEditRx}>
                          <div className="row">
                            <h5
                              className="header"
                              style={{
                                textAlign: 'center',
                                textDecoration: 'underline',
                                color: '#29b6f6'
                              }}>
                              <br />
                              Drug Info
                            </h5>
                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                call_to_action
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_generic"
                                type="text"
                                className="validate"
                                value={
                                  this.state.generic ||
                                  getItemProperty(
                                    this.props.items,
                                    this.state.itemId,
                                    'generic'
                                  )
                                }
                                onChange={this.handleChangeGeneric}
                                placeholder={getItemProperty(
                                  this.props.items,
                                  this.state.itemId,
                                  'generic'
                                )}
                                //required
                              />

                              <label htmlFor="icon_generic" />
                            </div>

                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                branding_watermark
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_brand"
                                type="text"
                                className="validate"
                                value={
                                  this.state.brand ||
                                  getItemProperty(
                                    this.props.items,
                                    this.state.itemId,
                                    'brand'
                                  )
                                }
                                onChange={this.handleChangeBrand}
                                placeholder={getItemProperty(
                                  this.props.items,
                                  this.state.itemId,
                                  'brand'
                                )}
                                //required
                              />
                              {console.log(this.props.items[index])}
                              <label htmlFor="icon_brand" />
                            </div>
                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                featured_play_list
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_indications"
                                type="text"
                                className="validate"
                                value={
                                  this.state.indications ||
                                  getItemProperty(
                                    this.props.items,
                                    this.state.itemId,
                                    'indications'
                                  )
                                }
                                onChange={this.handleChangeIndications}
                                placeholder={getItemProperty(
                                  this.props.items,
                                  this.state.itemId,
                                  'indications'
                                )}
                                //required
                              />
                              <label htmlFor="icon_indications" />
                            </div>

                            <div className="col s12 center">
                              <br />
                              <button
                                className="btn waves-effect waves-light light-blue lighten-1"
                                type="submit"
                                name="action">
                                UPDATE DRUG INFO
                              </button>
                              {this.state.hasValidationError
                                ? <p
                                    style={{
                                      color: 'red',
                                      fontWeight: 'bold',
                                      textAlign: 'center'
                                    }}>
                                    Please enter valid data.
                                  </p>
                                : null}
                            </div>
                          </div>

                          <br />
                        </form>
                      </Dialog>
                    </div>
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
}
export default withRouter(DrugsComponent);
