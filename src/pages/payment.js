import React, { Component } from 'react';

class Payment extends Component {
	constructor() {
		super()
		this.state = {
			data_product: [],
			total_harga: [],
			transfer: false,
			bank: '',
			metode: ''
		}
	}

	componentDidMount () {
		this.getLocalStorage();
	}

	getLocalStorage () {
		let storage = JSON.parse(localStorage.getItem('product'))
		this.state.data_product = storage
		this.setState({data_product: this.state.data_product});
		this.totalHarga(this.state.data_product)
	}

	totalHarga (product) {
		let total = [];
		for (var i = 0; i < product.length; i++) {
			total.push(parseInt(product[i].data_barang.price.replace(/\D/g,'')));
		}
		let total_all = total.reduce((a, b) => a + b);
		this.state.total_harga = total_all;
	}

	handlePembayaran (value) {
		if(value.target.value === 'transfer' && value.target.checked === true) {
			this.setState({transfer: true})
			this.setState({metode: 'Transfer'})
		}else {
			this.setState({transfer: false})
			this.setState({metode: 'Tunai'})
		}
	}
	handleSelect (value) {
		this.state.bank = value.target.value
		this.setState({bank: value.target.value})
	}
	bayar () {
		this.props.history.push({
			pathname: '/invoice',
			state: {
				product: this.state.data_product,
				total_harga: this.state.total_harga,
				bank: this.state.bank,
				metode: this.state.metode
			}
		})
	}

	render () {
		return (
			<div>
				<div className="bg-info p-4">
					<h5 className="m-0 text-light">Data Pembelian</h5>
				</div>
				<div className="container py-3">
					<div className="mb-3">
						<div className="card p-0">
							<div className="bg-light p-3">
								<p className="m-0">List Product</p>
							</div>
							<div className="p-3">
								<div className="row">
									{this.state.data_product.map((cart, i) => {
										return (
											<div className="col-6 col-md-4 col-lg-3 p-3" key={i}>
												<div className="card">
													<div className="card_list_img">
														  <img src={cart.data_barang.thumbnail} className="card_img card-img-top" alt="..." />
													</div>
												  <div className="card-body">
												    <h4 className="card-title text-truncate">{cart.data_barang.nama_barang}</h4>
												    <p className="card-text">{cart.data_barang.price}</p>
												    <p className="card-text text-truncate">{cart.data_barang.description}</p>
												  </div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
					<div className="card p-0">
						<div className="bg-light p-3">
							<p className="m-0">Detail Pembayaran</p>
						</div>
						<div className="p-3">
							<div>
								<p>Total Harga :</p>
								<h4 className="mb-3 font-weight-bold">Rp.{this.state.total_harga}</h4>
							</div>
							<div>
								<p>Voucer Diskon : </p>
								<input className="form-control col-12 col-md-5 mb-3" placeholder="Voucer"/>
							</div>
							<div>
								<p>Metode Pembayaran : </p>
								<div className="d-flex mb-3">
									 <div className="form-check mr-4">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="tunai" onChange={this.handlePembayaran.bind(this)} />
									  <label className="form-check-label" htmlFor="exampleRadios1">
									    Tunai
									  </label>
									</div>
									<div className="form-check">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="transfer" onChange={this.handlePembayaran.bind(this)} />
									  <label className="form-check-label" htmlFor="exampleRadios2">
									    Transfer
									  </label>
									</div>
								</div>
								{this.state.transfer === true ?
									<div className="col-12 col-md-5 p-0">
										<select className="form-control" onChange={this.handleSelect.bind(this)}>
											<option>-- Pilih Bank --</option>
											<option>BRI</option>
											<option>BCA</option>
											<option>BNI</option>
											<option>MANDIRI</option>
										</select>
									</div>
									:
									null
								}
								<div className="text-right">
									<button className="btn btn-info col-12 col-md-2" onClick={() => this.bayar()}>Bayar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Payment;