import React, { Component, Fragment } from 'react';
import axios from 'axios';
import  './style.css'

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
            <main class="mdl-layout__content">
                <div className="card mdl-card mdl-shadow--2dp">
                    <div className="mdl-grid">
                        <div class="mdl-cell mdl-cell--6-col">
                            <img src={ data.pictures[0].url } />
                        </div>
                        <div class="mdl-cell mdl-cell--6-col">
                            <div className="mdl-grid">
                                <h3>{ data.title }</h3>
                            </div>
                            <div className="mdl-grid">
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                    Comprar
                                </button>
                            </div>
                            <div className="mdl-grid"> 
                                <p> { data.description } </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </Fragment>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ?
        <div className="text_loading">Carregando...</div> :
        this.renderContent();
  }
}
  
export default Product;