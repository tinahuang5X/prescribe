import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditRxComponent extends Component {
  render() {
    return (
      <form className="col s12" onSubmit={this.handleEditRx}>
        <div className="row">
          <h5
            className="header"
            style={{
              textAlign: 'center',
              textDecoration: 'underline',
              color: 'brown'
            }}>
            <br />
            Drug Info
          </h5>
          <div className="input-field col s12">
            <i className="material-icons prefix">call_to_action</i>
            <input
              style={{ fontSize: '20px' }}
              id="icon_generic"
              type="text"
              className="validate"
              placeholder={this.props.RxItem && this.props.RxItem.generic}
              //required
            />

            <label htmlFor="icon_generic" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">branding_watermark</i>
            <input
              style={{ fontSize: '20px' }}
              id="icon_brand"
              type="text"
              className="validate"
              placeholder={this.props.RxItem && this.props.RxItem.brand}
              //required
            />
            {console.log(this.props.RxItem)}
            <label htmlFor="icon_brand" />
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">featured_play_list</i>
            <input
              style={{ fontSize: '20px' }}
              id="icon_indications"
              type="text"
              className="validate"
              placeholder={this.props.RxItem && this.props.RxItem.indications}
              //required
            />
            <label htmlFor="icon_indications" />
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">assessment</i>
            <input
              style={{ fontSize: '20px' }}
              id="icon_dosage"
              type="text"
              className="validate"
              placeholder={this.props.RxItem && this.props.RxItem.dosage}
              //required
            />
            <label htmlFor="icon_dosage" />
          </div>
          {/* <div className="input-field col s12">
            <i className="material-icons prefix">announcement</i>
            <input
              id="icon_sideeffects"
              type="text"
              className="validate"
              placeholder="Side Effects"
              required
            />
            <label htmlFor="icon_sideeffects" />
          </div> */}
          <div className="col s12 center">
            <button
              className="btn waves-effect waves-light red darken-2"
              type="submit"
              name="action">
              UPDATE DRUG INFO
            </button>
          </div>
        </div>

        <br />
      </form>
    );
  }
  handleEditRx = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const generic =
      $form.icon_generic.value.trim() || this.props.RxItem.generic;
    const brand = $form.icon_brand.value.trim() || this.props.RxItem.brand;

    const indications =
      $form.icon_indications.value.trim() || this.props.RxItem.indications;

    const dosage = $form.icon_dosage.value.trim() || this.props.RxItem.dosage;

    //const sideeffects = $form.icon_sideeffects.value.trim();

    this.props.onEditRx(this.props.RxItem.id, {
      generic,
      brand,
      indications,
      dosage
    });
    this.props.history.push('/order');
  };
}
export default withRouter(EditRxComponent);
