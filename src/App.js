import {useState} from 'react';

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

const DEFAULT_STATE= [
  {id: 1, title: "Book 1", desc: "Book 1 description"},
  {id: 2, title: "Book 2", desc: "Book 2 description"},
  {id: 3, title: "Book 3", desc: "Book 3 description"},
  {id: 4, title: "Book 4", desc: "Book 4 description"},
]

function loadData() {
  const data = [];

  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i,
      title: `Book ${i}`,
      desc: `Book ${i} is a good read`
    })
  }

  return data;
}

function App() {
  const [books, setBooks] = useState(loadData);

  const loadBookPreview= (id) => {
    const book = books.find(book => book.id == id);
    console.log(id, book);
    return book;
  }

  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact >
            <Home books={books}/>
          </Route>
          <Route path="/book-edit" >
            <BookEditor/>
          </Route>
          <Route path="/book/:id" >
            <BookPreview loadBook={loadBookPreview} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
