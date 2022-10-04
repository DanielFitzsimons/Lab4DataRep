import React from "react";

export class Content extends React.Component{

    render(){
        return( // returns content for page
               <div>
                    <h1>Hello World</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
               </div>
           
        );
    }
}