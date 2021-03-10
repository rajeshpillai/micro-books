import {useState, useEffect, useContext} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { RootContext } from '../context/root-context';
import Chapter from './chapter';

export default function Chapters({bookId}) {
  const [chapters, setChapters] = useState(undefined);
  const {getChapters} = useContext(RootContext);

  useEffect(() => {
    setChapters(getChapters(bookId))
  }, [bookId])

  return (
    <>
      {!chapters && <h2>Loading chapters...</h2>}
      {chapters && 
        chapters.map(chapter => {
          return (
            <Chapter chapter = {chapter} />
          )
        })
      }
    </>
  )
}
