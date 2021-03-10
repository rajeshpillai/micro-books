import {
  NavLink
} from 'react-router-dom';

const Home = ({books}) => {

  return (
    <div className="books">
      {
        books.map(book => {
          return (
            <div key={book.id} className="book">
              <h3>{book.title}</h3>
              <div>{book.desc}</div>
              <NavLink to={`/book/${book.id}`}>View Details</NavLink>
            </div>
          )
        })
      }
    </div>
  )
}
export default Home;