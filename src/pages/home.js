import React, { Component } from 'react';
import List from '../components/list';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
	state = {
		data: [],
		store: []
	}

	componentDidMount () {
		this.getData()
	}

	getData () {
		axios.get('https://backend-beli.herokuapp.com/product').then(res => {
			console.log(res.data)
			this.setState({data: res.data})
		})

	}

	listCart () {
		this.props.history.push('/cart')
	}

	render () {
		return (
			<div>
				<div className="d-flex justify-content-between align-item-center bg-info p-4 mb-3">
					<h5 className="m-0 text-light">List Product</h5>
					<FontAwesomeIcon icon="shopping-cart" className="text-light m-0" onClick={()=> this.listCart()} />
				</div>
				<div className="container">
					<List product={this.state.data} />
				</div>
			</div>
		)
	}
}

export default Home;