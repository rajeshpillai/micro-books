import {useState, useEffect, useContext} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { RootContext } from '../context/root-context';
export default function BookPreview({loadBook}) {
  let {id} = useParams();
  const [book, setBook] = useState(undefined);
  const {findBook} = useContext(RootContext);

  useEffect(() => {
    setBook(findBook(id))
  }, [id])

  return (
    <>
      {!book && <h2>Loading....</h2>}
      { book && 
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <div>{book.desc}</div>
          <NavLink to={`/book/editor/${id}`}>Manage Book</NavLink>
        </div>
      }
    </>
  )
}
