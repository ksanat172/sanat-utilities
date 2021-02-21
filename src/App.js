import { Provider } from 'react-redux';
import Hello from './components/home/container/home';
import store from '../src/redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Hello/>
     </Provider>
    </div>
  );
}

export default App;
