import {NavLink} from 'react-router-dom';

export default function ChapterPreview({book, chapter}) {
return (
      <div className="book">
        <h3>{chapter.title}</h3>
        <NavLink to={`/books/${book.id}/chapters/${chapter.id}`}>Manage Chapters</NavLink>
      </div>
  )
}
