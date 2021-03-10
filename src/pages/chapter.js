import {NavLink} from 'react-router-dom';

export default function Chapter({book, chapter}) {
return (
      <div className="book">
        <h3>{chapter.title}</h3>
        <NavLink to={`/books/${book.id}/`}>Manage Chapters</NavLink>
      </div>
  )
}
