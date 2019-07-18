import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Cart extends Component {
	state ={
		store:[]
	}

	componentDidMount () {
		this.getLocalStorage()
	}

	getLocalStorage () {
		this.setState({store: JSON.parse(localStorage.getItem('product'))})
	}
	
	pembayaran (value) {
		this.props.history.push({pathname: '/payment', state: value})
	}

	delete (value) {
		let data = JSON.parse(localStorage.getItem('product'))
		data.splice(value, 1)
		localStorage.setItem('product', JSON.stringify(data))
		this.getLocalStorage()

	}

	render () {
		return (
			<div>
				<div className="bg-info p-4">
					<h5 className="m-0 text-light">Keranjang Belanja</h5>
				</div>
				<div className="container">
					<div className="py-3">
						<h6>Anda Memiliki {this.state.store.length} Barang</h6>
					</div>
					<div className="text-right">
						<Link to="/" className="mr-2">
							<button className="btn btn-sm btn-outline-info">Add Product</button>
						</Link>
						<button className="btn btn-sm btn-outline-info" onClick={() => this.pembayaran(this.state.store)}>Bayar Product</button>
					</div>
					<div className="row">
						{this.state.store.map((cart, i) => {
							return (
								<div className="col-6 col-md-4 col-lg-3 p-3" key={i}>
									<div className="card">
										<div className="card_list_img">
											  <img src={cart.data_barang.thumbnail} className="card_img card-img-top" alt="..." />
										</div>
									  <div className="card-body">
									    <h5 className="card-title text-truncate">{cart.data_barang.nama_barang}</h5>
									    <p className="card-text">{cart.data_barang.price}</p>
									    <p className="card-text text-truncate">{cart.data_barang.description}</p>
									    <div className="text-right d-flex justify-content-between">
									    	<button className="btn btn-sm btn-outline-info" onClick={() => this.delete(i)}>
									    	<FontAwesomeIcon icon="trash-alt"className="mr-2 text-danger" />Delete</button>
									    </div>
									  </div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Cart;