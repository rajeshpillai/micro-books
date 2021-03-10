export default function Chapter({chapter}) {

  return (
    <>
      {!chapter && <h2>Loading....</h2>}
      { chapter && 
        <div className="book">
          <h3>{chapter.title}</h3>
          <button>Add Section</button>
        </div>
      }
    </>
  )
}
