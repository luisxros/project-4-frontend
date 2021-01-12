import './App.css';


import Footer from './components/Footer';
import Header from './components/Header';


import HomePage from './pages/HomePage';
import SongPage from './pages/SongPage';

import {Route, Switch} from 'react-router-dom';







function App(props) {
  

return (

  <div className="App">
    <div className='content-wrap'>

      <Header />

      <Switch>

      <Route exact path='/' render={(props) => 
      <HomePage />} />

      <Route exact path='/songs' render={(props) =>
      <SongPage />} />

      </Switch>

      <Footer className='footer' />

      </div>
  </div>
  );
}

export default App;
