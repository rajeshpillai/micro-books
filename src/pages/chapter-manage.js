import {useState, useEffect, useContext} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import { RootContext } from '../context/root-context';

export default function ChapterManage(props) {
  const {bookId, chapterId} = useParams();
  const [chapter, setChapter] = useState();

  const {getChapter} = useContext(RootContext);

  useEffect(() => {
    setChapter(ps => {
      return getChapter(bookId, chapterId)
    })
  }, [])

  return (
    <>
      {!chapter && <h3>Loading chapters...</h3>}
      {chapter && 
      
      <div className="chapter-container">
        <div className="chapter">
          <h3>{chapter.title}</h3>
          <button>ADD NEW SECTION</button>
        </div>
        <div className="sections">
          {
            chapter.sections.map(section => {
              return (
                <div key={section.id} className="section">
                    <div>{section.content}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      }
    </>
  )
}
