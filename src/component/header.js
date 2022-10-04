import React from "react";

export class Header extends React.Component // allows to export content to App.js
{
    render(){
        return(
            <div>
                 <h1>My Header in another Component</h1>
            </div>
        );
    }
}