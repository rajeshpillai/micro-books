import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function BookPreview({loadBook}) {
  let {id} = useParams();
  const [book, setBook] = useState(undefined);
  useEffect(() => {
    setBook(loadBook(id))
  }, [id])

  return (
    <>
      {!book && <h2>Loading....</h2>}
      { book && <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <div>{book.desc}</div>
      </div>
      }
    </>
  )
}
