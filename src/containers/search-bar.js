import React,{Component} from 'react';

export default class Searchbar extends Component{
  constructor(props){
    super(props);

    this.state={term: ''};
    this.onInputChange=this.onInputChange.bind(this);
  }
  onInputChange(event){
    console.log(event.target.value);
    this.setState({term:event.target.value})
  }
  render(){
    return(
      <div>
      <form className='input-group'>
      <input placeholder="get 5day forecast in your city"
      className='form-control'
      value={this.state.term}
      onChange={this.onInputChange}/>
      <span className='input-group-btn'>
      <button type='submit' className='btn btn-secondary'>Submit</button>
      </span>
      </form>
      </div>
    );
  }
}
