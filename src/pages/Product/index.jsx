import React, { Component, Fragment } from 'react';
import Loading from '../../components/Loading';

import Currency from 'react-currency-formatter';

import axios from 'axios';
import './product-style.css';
import { relative } from 'path';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    axios.all([
      axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
      axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
    ])
      .then(([item, description]) => {
        this.setState({
          data: {
            ...item.data,
            city: item.data.seller_address.city.name,
            state: item.data.seller_address.state.name,
            description: description.data.plain_text
          },
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderContent() {
    const { data } = this.state;
    return (
      <Fragment>
        <main className="mdl-layout__content">
          
          <div className="mdl-grid">

            <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone" style={{ textAlign: "center" }}>
              <img className="item-product-image" src={ data.pictures[0].url } />
            </div>

            <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone product-description">
              
              <h3 className="mdl-card__title-text">{ data.title }</h3>
              <span>{ data.id } | { data.city }, { data.state }</span>
              
              <div className="item-price-product">
                <Currency quantity={ data.price } currency="BRL" locale="pt_BR" />
              </div>
            
              <div className="content-button">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored item-button">
                  Comprar
                </button>
              </div>
              
            </div>

            <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card__supporting-text  ">
              <p> { data.description } </p>
            </div>

          </div>

        </main>
      </Fragment>
    );
  }

  renderLoading() {
    return (
      <Loading />
    )
  }

  render() {
    const { loading } = this.state;
    return loading ? this.renderLoading() : this.renderContent();
  }
}

export default Product;