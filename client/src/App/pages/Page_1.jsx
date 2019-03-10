import React, { Component } from 'react';

class Page1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
      }
    
      // Fetch the list on first mount
      componentDidMount() {
        this.getApi();
      }
    
      // Retrieves the list of items from the Express app
      getApi = () => {
        fetch('/api/v1/item')
        .then(res => res.json())
        .then(items => this.setState({ items: items }))
      }
    
      render() {
        const { items } = this.state;
        let mappedItems = items.map( ( data, i ) => {
            return <li>{data.name} {data.value}</li>;
        })
        return(
            <>
                <h1>Pobieranie danych z api z /index.js</h1>
                <ul>
                    { mappedItems }
                </ul>
            </>
        )
      }
}

export default Page1;