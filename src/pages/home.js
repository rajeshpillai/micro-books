import {useContext} from 'react';
import {RootContext} from '../context/root-context';

import {
  NavLink
} from 'react-router-dom';

const Home = (props) => {
  const {state} = useContext(RootContext);

  return (
    <div className="books">
      {
        state.books.map(book => {
          return (
            <div key={book.id} className="book">
              <h3>{book.title}</h3>
              <div>{book.desc}</div>
              <NavLink to={`/book/${book.id}/preview`}>View Details</NavLink>
            </div>
          )
        })
      }
    </div>
  )
}
export default Home;