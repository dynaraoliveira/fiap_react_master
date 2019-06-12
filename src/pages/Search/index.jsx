import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Currency from 'react-currency-formatter';

import axios from 'axios';
import './search-style.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    const value = event.currentTarget.value;
    axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${ value }`)
      .then(({ data }) => {
        this.setState({
          results: data.results,
        });
      });
  };

  renderItem(item) {
    return (
      <Link to={`/product/${ item.id }`}>
        <li className="mdl-list__item item" key={ item.id }>
          <div className="mdl-grid static-width">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--2-col-phone item-image">
              <img src={item.thumbnail} />
            </div>
            <div className="mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--2-col-phone">
              <div className="mdl-card__supporting-text">
                <h2 className="mdl-card__title-text">{ item.title }</h2>
                <div className="item-price">
                  <Currency quantity={ item.price } currency="BRL" locale="pt_BR" />
                </div>
              </div>
            </div>
          </div>

        </li>
      </Link>
    );
  };

  render() {
    return (
      <main className="mdl-layout__content">
        <div className="mdl-layout__tab-panel is-active" id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing">

            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" id="search" autoComplete="off" autoCapitalize="off" spellCheck="false" autoCorrect="off" onChange={ this.onSearch } />
              <label className="mdl-textfield__label" htmlFor="search">Buscar produtos...</label>
            </div>

            <ul className="static-width mdl-list">
              { this.state.results.map(this.renderItem) }
            </ul>

          </section>
        </div>
      </main>
    );
  };
};

export default Search;