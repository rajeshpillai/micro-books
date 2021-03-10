import React, {useState} from 'react';
import {RootContext} from '../context/root-context';


/*
  Book {
    title
    desc

    chapters [
      {
        id  
        title  
        sections [
          { id content}
        ]
      } 
    ]
  }

*/

function loadData() {
  const data = [];

  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i,
      title: `Book ${i}`,
      desc: `Book ${i} is a good read`
    })
  }

  return data;
}

function loadChapters(books) {
  const chapters = [];

  for (let i = 0; i < books.length; i++) {
    for(let j = 1; j < 5; j++) {
      chapters.push({
        id: j,
        bookId: books[i].id,
        title: `Chapter ${j}`
      });
    }
  }

  return chapters;
}

export const RootProvider = ({children}) => {
  const books = loadData();

  const [state, setState] = useState({
    books: books,
    chapters: loadChapters(books)
  });

  const findBook = (id) => {
    const book = state.books.find(book => book.id == id);
    console.log(id, book);
    return book;
  }

  const saveBook = (id, updatedBook) => {
    alert(JSON.stringify(updatedBook));
    const updatedState = state.books.map(book => {
      if (book.id == id) {
        return updatedBook;
      }
      return book;
    });

    setState(prevState => ({
      ...prevState, 
      books: [...updatedState]
    }))
  }

  const getChapters = (bookId) => {
    return state.chapters.filter(chapter => chapter.bookId == bookId);
  }

  const getApi = () => {
    return {
      state, 
      setState,
      saveBook,
      findBook,
      getChapters
    }
  }


  return (
    <RootContext.Provider value={getApi()}>
      {children}
    </RootContext.Provider>
  )
}