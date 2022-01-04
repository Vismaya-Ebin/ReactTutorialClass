import React ,{Component }from 'react'; 
import Todo from './component/Todo.js';
import Movie from './component/Movie.js';
import {ColorBox,AddColor} from './component/Color.js';

import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//    <h1>Welcome</h1>
//     </div>
//   );
// }
class App extends Component {
  state = {
    fname:"Vismaya",
    lname:"Wilson",
    age:29
  }
  render() {
    return (
    <div>

      <h1>Welcome to React</h1> 
      <p>{this.state.fname}</p>
      <Todo sendingData={this.state.age}/>
      <Movie/>
      <AddColor/>
      <ColorBox/>
    
    </div>
  
    )
  }
}
export default App;
