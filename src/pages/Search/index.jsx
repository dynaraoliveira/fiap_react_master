import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Search extends Component{
   constructor() {
       super();

       this.state = {
           results: [],
       }

       this.onSearch = this.onSearch.bind(this)
   } 

    onSearch(event) {
        const value = event.currentTarget.value;    
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({data}) => {
                this.setState({ 
                    results: data.results,
                    });
                })
    }

    renderItem(item) {
        return (
            <li className ="mdl-list__item" key={ item.id }>
                <span><img src={ item.thumbnail } /></span>
                <span>{ item.title }</span>
                <Link to={ `/product/${ item.id }` }>Abrir produto</Link>
            </li>
        )
    }

    render(){
        return(
            <div>
                <input type="text" onChange={ this.onSearch } />
                <ul className="mdl-list">
                    { this.state.results.map(this.renderItem) }
                </ul>
            </div>
        )
    }
}
export default Search;