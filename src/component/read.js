import axios from "axios";
import React from "react";
import { Books } from "./books";

export class Read extends React.Component{

    componentDidMount(){
        // axios is http cleint
        //gets data from url
        
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784').then((response)=>{
            this.setState({
                books: response.data
            })
        }).catch(function(error){
            console.log(error);
        });
    }
    
    state = {
       
        books: []
    }
    render(){
        return( 
               <div>
                    <h3>Hello from read componet</h3>

                    <Books books={this.state.books}></Books>
               </div>
        );
    }
}




