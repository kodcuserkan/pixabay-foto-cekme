import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import ImageResult from './ImageResult';
import axios from 'axios';

class Search extends Component {
    state = {
        searchText : '',
        amount : 15,
        apiURL : 'https://pixabay.com/api',
        apiKey : '14383225-584a0c6cb28a37c4808b121b9van', // Buraya kendi apikeyinizi yapıştırın
        images : []
    };

    onTextChange = e => {
        const val = e.target.value
        // const sorgu = `${this.state.apiUrl}/?key=${this.state.apiKey}&
        // q=${this.state.searchText}&
        // image_type=photo&per_page=
        // ${this.state.amount}&safesearch=true`
        // console.log(sorgu);
        
        this.setState ({
            [e.target.name] : val
        }, async () =>  {
            if (val === "") {
                this.setState({images : []})
            } else {
            axios.get(
            `${this.state.apiURL}/?key=${this.state.apiKey}&
            q=${this.state.searchText}&
            image_type=photo&per_page=
            ${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err.response));
                // try {
                // let response = await fetch (`${this.state.apiURL}/?key=${this.state.apiKey}&
                // q=${this.state.searchText}&
                // image_type=photo&per_page=
                // ${this.state.amount}&safesearch=true`)
                // console.log(response);
                
                // let pics = await response.json();
                // console.log(pics);
                
                // this.setState({
                //     images : pics.hits
                // })
                // } catch (error) {
                //     console.log(error);                 
                // }
            }
        })
    };

    onAmountChange = (e,index,value) => this.setState({amount : value})

    render() {
        
        console.log(this.state.images );
        
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Resim ara"
                    fullWidth={true}
                />
                <br/>
                <SelectField
                name="amount"
                floatingLabelText="Adet"
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
            
                <br/>

                {this.state.images.length > 0 ? (<ImageResult images={this.state.images}/>) : null}

            </div>
        )
    }
}
export default Search;