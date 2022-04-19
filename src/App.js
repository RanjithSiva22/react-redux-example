
import Com from './com';

import {Provider} from 'react-redux';

import store from "./store";

import {Increment,Decrement} from './actions';
// import {reducer} from './reducer';

function App() {
  let increment=()=>{
    store.dispatch({type:Increment});
    // console.log("hi"+store.getState().count);
  }
  return (
    
    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <h1>redux</h1>
        <Com/><br></br>
        <button onClick={increment}>In</button>
        <button onClick={()=>store.dispatch({type:Decrement})}>De</button>

      </header>
    </div>
    </Provider>
  );
}
export default App;
