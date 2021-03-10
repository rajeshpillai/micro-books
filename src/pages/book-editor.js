import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { RootContext } from '../context/root-context';

const BookEditor = (props) => {
  let {id} = useParams();

  const [book, setBook] = useState(undefined);
  const {findBook, saveBook} = useContext(RootContext);

  useEffect(() => {
    setBook(findBook(id))
  }, [id])

  const handleChange = (e) => {
    setBook(b => {
      return {
        ...b,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSaveBook = (e) => {
    e.preventDefault();
    saveBook(id, book);
  }

  return (
    <div>
      <h2>New/Edit Book</h2>
      <h3>{book?.title}</h3>
      <textarea name="desc" placeholder="book description" rows="10" cols="100" 
        value={book?.desc}
        onChange = {handleChange}
      />
      <button onClick={handleSaveBook}>SAVE BOOK</button>
    </div>
  )
}

export default BookEditor;