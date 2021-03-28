import React from 'react';
import Form from '../common/form/form';
import auth from '../../services/authService';
import shopService from '../../services/shopService';
import './shop.scss';

class Shop extends Form {
  state = {
    items: [],
    data: { name: '' },
    errors: {},
  };
  user;
  async componentDidMount() {
    this.user = auth.getCurrentUser();
    const data = await shopService.getShoppingItems(this.user.familyId);
    this.setState({ items: data.items });
  }

  async handleToggle(item) {
    await shopService.toggleShoppingState(item.id, !item.purchased);
    const data = await shopService.getShoppingItems(this.user.familyId);
    this.setState({ items: data.items });
  }

  async deleteItem(id) {
    try {
      await shopService.deleteItem(id);
      const data = await shopService.getShoppingItems(this.user.familyId);
      this.setState({ items: data.items });
    } catch (ex) {}
  }

  async doSubmit() {
    const data = { ...this.state.data };
    try {
      await shopService.addItem(data.name);
      this.setState({ data: { name: '' } });
    } catch (ex) {}
  }

  validateProperty = (name, value) => {
    if (value.trim() === '') return 'Name is required';
    return null;
  };
  render() {
    const { items } = this.state;
    return (
      <div className="shopping-container">
        <div className="header-div">
          <div className="shop-heading">Shopping List</div>
          <p className="shop-sub-heading">Your virtual shopping list.</p>
        </div>
        <div className="table-container">
          <table className="shopping-table">
            <thead>
              <tr className="border">
                <th className="number">#</th>
                <th className="details">Details</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border">
                  <td onClick={() => this.handleToggle(item)}>
                    <div
                      className={item.purchased ? 'check-div' : 'uncheck-div'}
                    ></div>
                  </td>
                  <td className={item.purchased ? 'strike details' : 'details'}>
                    {item.name}
                  </td>
                  <td
                    className="delete"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    <i className="fa fa-times"></i>
                  </td>
                </tr>
              ))}
              <tr className="border">
                <td></td>
                <td className="details">
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', '')}
                  </form>
                </td>
                <td></td>
              </tr>
              <tr className="last-row">
                <td></td>
                <td className="details"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.history.push('/');
          }}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Shop;
