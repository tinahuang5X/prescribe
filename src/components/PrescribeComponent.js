import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class PrescribeComponent extends Component {
  render() {
    const generic = [];
    if (this.props.items && Array.isArray(this.props.items)) {
      for (let item of this.props.items) generic.push(item.generic);
    }
    const brand = [];
    if (this.props.items && Array.isArray(this.props.items)) {
      for (let item of this.props.items) brand.push(item.brand);
    }

    return (
      <div>
        <AutoComplete
          hintText="Type a generic name (case insensitive)"
          hintStyle={{
            fontSize: '16px',
            color: '#29b6f6',
            width: '300px',
            marginLeft: '50px'
          }}
          inputStyle={{
            fontSize: '16px',
            color: '#29b6f6',
            width: '300px',
            marginLeft: '50px'
          }}
          underlineStyle={{ width: '300px', marginLeft: '50px' }}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={generic}
        />
        {console.log(this.props.items)}
        <br />
        <AutoComplete
          hintText="Type a brand name (case insensitive)"
          hintStyle={{
            fontSize: '16px',
            color: '#29b6f6',
            width: '300px',
            marginLeft: '50px'
          }}
          inputStyle={{
            fontSize: '16px',
            color: '#29b6f6',
            width: '300px',
            marginLeft: '50px'
          }}
          underlineStyle={{ width: '300px', marginLeft: '50px' }}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={brand}
        />
      </div>
    );
  }
}
export default PrescribeComponent;
