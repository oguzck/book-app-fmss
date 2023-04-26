import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import Header from './components/header';
import { Fragment, useState } from 'react';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  const [query , setQuery] = useState();
  const [bookList, setBookList] = useState();

  return (
    <div className='app-container'>
      <Header query={query} setQuery={setQuery} setBookList={setBookList} />
      {bookList && bookList.totalItems > 0 ? (
        <BookList bookList={bookList} />
      ) : (
        <NotFound />
      )}
      <Footer/>
    </div>
  );
}

export default App;
