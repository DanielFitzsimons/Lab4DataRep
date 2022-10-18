import React from "react";

export class Create extends React.Component{


    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this); //bind data to value 
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChageBookAuthor = this.onChageBookAuthor.bind(this);
        // leaves values blank so user can search 
        this.state = {
            title:'',
            cover:'',
            author:''
        }

    }

    handleSubmit(e){
        e.preventDefault(); //handles the sumbit action
        console.log(`${this.state.title}, ${this.state.cover}, ${this.state.author}`);
        this.setState ={
            title:'',
            cover:'',
            author:''
        }
    }

    //targets value of title, cover and author and changes the value typed into text box
    // selects data from json file and searches through
    // sets new value 
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }

    onChageBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }




    render(){
        return( // returns content for page
        //shows text field and submit button
               <div>
                    <h3>Hello from Create component</h3>

                    
                    
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeBookTitle}
                    />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.cover}
                        onChange={this.onChangeBookCover}
                    />
                    </div>

                    <div className="form-group">
                        <label>Add Book author: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.author}
                        onChange={this.onChageBookAuthor}
                    />
                    </div>

                    <form>
                    <input type="submit" value="Submit" />
                    </form>
               </div>
           
        );
    }
}