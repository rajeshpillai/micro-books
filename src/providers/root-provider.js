import React, {useState} from 'react';
import {RootContext} from '../context/root-context';

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

export const RootProvider = ({children}) => {
  const [state, setState] = useState({
    books: loadData()
  });

  const findBook = (id) => {
    const book = state.books.find(book => book.id == id);
    console.log(id, book);
    return book;
  }

  return (
    <RootContext.Provider value={[state, setState, findBook]}>
      {children}
    </RootContext.Provider>
  )
}