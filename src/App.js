import './App.css';
import DisplayList from './displayList';
import {Provider} from 'react-redux'
import Store from './store/store';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <header className="App-header">
          <DisplayList />
      </header>
    </div>
    </Provider>
  );
}

export default App;
