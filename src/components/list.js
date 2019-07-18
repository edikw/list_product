import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
	cart (value) {
		if(!localStorage.getItem("product")) {
			localStorage.setItem("product", JSON.stringify([value]));
			alert('success')
		}else {
			let store = JSON.parse(localStorage.getItem("product"))
			store.push(value)
			localStorage.setItem("product", JSON.stringify(store))
			alert('success')
		}
	}

	render () {
		return (
			<div>
				<div className="row">
					{this.props.product.map((data , i) => {
						return (
							<div className="col-6 col-md-4 col-lg-3 p-3" key={i}>
								<div className="card">
									<div className="card_list_img">
										  <img src={data.data_barang.thumbnail} className="card_img card-img-top" alt="..." />
									</div>
								  <div className="card-body">
								    <h5 className="card-title text-truncate">{data.data_barang.nama_barang}</h5>
								    <p className="card-text">{data.data_barang.price}</p>
								    <p className="card-text text-truncate">{data.data_barang.description}</p>
								    <div className="text-right">
								    	<button className="btn btn-sm btn-outline-info" onClick={()=> this.cart(data)}>
								    	<FontAwesomeIcon icon="cart-plus"className="mr-2" />Add Cart</button>
								    </div>
								  </div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default List;