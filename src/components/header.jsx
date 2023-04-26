import React from 'react'
import axios from 'axios'
import BookList from './BookList';

export default function Header({ query, setQuery, setBookList }) {
    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    const  handleSubmit = (e) => {
        e.preventDefault();
        const API_KEY = 'AIzaSyC42BQMw4ABDUxPLw7Kl1fhh9UBg61dYgA'
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;
        axios.get(url)
            .then(response => {
                setBookList(response.data)
                setQuery(''); // Clear the input field after the search is completed
                
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <header>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8">
                        <h1 className="text-center">Search for a Book</h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                            <input onChange={handleChange} value={query} type="text" className="form-control" placeholder="Search for a book" aria-label="Search for a book" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>



    )
}
