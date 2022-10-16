import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render(){
        // this returns the array of books
        //  map function calls each element of array
        // the book.isbn gives each element a unique key to avoid error message
        return this.props.books.map(
            (book)=>{
                return <BookItems book={book} key={book.isbn}></BookItems>
            }
        );
    }
} 