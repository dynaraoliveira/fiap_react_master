
import React ,{Component}from 'react';
import logo from './logo.svg';
import {BrowserRouter  as Router} from 'react-router-dom'
import Header  from './components/Header'
import Routes from'./routes';

class App extends Component{
   render(){
    return (
     <div className="mdl-layout">
       <Router>
         <Header /> 
         <Routes/>
       </Router>
    </div>
  );
}
}
export default App;
