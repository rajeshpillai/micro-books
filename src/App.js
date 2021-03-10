import {useState} from 'react';
import {RootContext} from './context/root-context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import './app.css';
import BookEditor from './pages/book-editor';
import Home from './pages/home';
import NavBar from './components/navbar';
import BookPreview from './pages/book-preview';
import {RootProvider} from'./providers/root-provider';

function App() {



  return (
    <RootProvider>
      <div className="app">
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/book-edit" >
              <BookEditor/>
            </Route>
            <Route path="/book/:id" >
              <BookPreview />
            </Route>
          </Switch>
        </Router>
      </div>
    </RootProvider>
  );
}

export default App;
