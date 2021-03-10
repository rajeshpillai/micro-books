import {useState, useEffect, useContext} from 'react';
import { RootContext } from '../context/root-context';
import Chapter from './chapter';

export default function Chapters({book}) {
  console.log("Loading book...", book);
  const [chapters, setChapters] = useState(undefined);
  const {getChapters} = useContext(RootContext);

  useEffect(() => {
    setChapters(getChapters(book.id))
  }, [])

  return (
    <>
      {!chapters && <h2>Loading chapters...</h2>}
      {chapters && 
        chapters.map(chapter => {
          return (
            <Chapter book={book} chapter = {chapter} />
          )
        })
      }
    </>
  )
}
