import React from 'react';
import {connect} from 'react-redux';

class Person extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.props.handleClick(e, this.props.id);
	}

	render(){
		const {name,profilePath} = this.props;	

		return(
			<button onClick={this.handleClick}>
				<h1>{name}</h1>
				{profilePath && 
					<img src={"https://image.tmdb.org/t/p/w185/"+profilePath} alt="Headshot" />
				}
			</button>
		);
	}
}

export default connect()(Person);