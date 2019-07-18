import React, { Component } from 'react' ;

class Invoice extends Component {
	state = {
		product: [],
		total: '',
		metode: '',
		bank: ''
	}
	componentDidMount () {
		console.log(this.props.location.state)
		this.setState({
			product: this.props.location.state.product,
			total: this.props.location.state.total_harga,
			metode: this.props.location.state.metode,
			bank: this.props.location.state.bank
		})
	}
	render () {
		return (
			<div>
				<div className="bg-info p-4 mb-3">
					<h5 className="m-0 text-light">Invoice</h5>
				</div>
				<div className="container p-0 border rounded">
					<div className="d-flex justify-content-between bg-light">
						<div className="p-3">
							<p className="m-0">Nama Barang :</p>
						</div>
						<div className="p-3">
							<p className="m-0">Harga :</p>
						</div>
						<div className="p-3">
							<p className="m-0">Jumlah :</p>
						</div>
					</div>
					<div className="mb-3">
						{this.state.product.map((data, i)=> {
							return (
								<div key={i} className="d-flex p-3">
									<div className="col p-0 text-left">
										<p className="m-0">{data.data_barang.nama_barang}</p>
									</div>
									<div className="col p-0 text-center">
										<p className="m-0">{data.data_barang.price}</p>
									</div>
									<div className="col p-0 text-right">
										<p className="m-0">1</p>
									</div>
								</div>
							)
						})}
					</div>
					<div className="p-3 bg-light">
						<p className="m-0">Total Harga :</p>
					</div>
					<div className="mb-3 p-3">
						<h5 className="m-0"> Rp. {this.state.total}</h5>
					</div>
					<div className="p-3 bg-light">
						<p className="m-0">Metode Pembayaran :</p>
					</div>
					<div className="mb-3 p-3">
						<h5 className="m-0">{this.state.metode}</h5>
					</div>
					<div className="p-3 bg-light">
						<p className="m-0">Bank :</p>
					</div>
					<div className="mb-3 p-3">
						<h5 className="m-0">{this.state.bank}</h5>
					</div>
				</div>
			</div>
		)
	}
}

export default Invoice;