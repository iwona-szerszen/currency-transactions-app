import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConverterUnit from '../presentational/ConverterUnit/ConverterUnit';
import AddTransactionUnit from '../presentational/AddTransactionUnit/AddTransactionUnit';
import TransactionList from '../presentational/TransactionList/TransactionList';
import MaxTransactions from '../presentational/MaxTransactions/MaxTransactions';
import { updateConverter, addTransaction, removeTransaction } from '../../actions';
import { getTransactions, getEuroToPlnConverter, getTotalAmountEur, getMaxTransactions } from '../../reducer';

class TransactionPageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			converterInput: this.props.euroToPlnConverter,
			transactionForm: {
				transactionName: '',
				amountEur: '',
			},
		};
		console.log(this.props.maxTransaction);
	}
	handleConverterInputChange(event) {
		this.setState({ converterInput: parseFloat(event.target.value) });
	}
	handleTransactionInputChange(event) {
		const transactionForm = Object.assign({}, this.state.transactionForm);
		transactionForm[event.target.name] = (event.target.type === 'number') ? parseFloat(event.target.value) : event.target.value;
		this.setState({ transactionForm });
	}
	handleSubmitUpdateConverter(event) {
		event.preventDefault();
		const euroToPlnConverter = this.state.converterInput;
		this.props.dispatch(updateConverter(euroToPlnConverter));
	}
	handleSubmitAddTransaction(event) {
		event.preventDefault();
		const transaction = {
			name: this.state.transactionForm.transactionName,
			amountEur: this.state.transactionForm.amountEur,
		}
		this.props.dispatch(addTransaction(transaction));
		this.setState({
			transactionForm: {
				transactionName: '',
				amountEur: '',
			},
		});
	}
	handleRemoveTransaction(transactionId) {
		this.props.dispatch(removeTransaction(transactionId));
	}
	render() {
		return (
			<div className='container'>
				<ConverterUnit
					converterInput={this.state.converterInput}
					onConverterInputChange={this.handleConverterInputChange.bind(this)}
					onSubmitUpdateConverter={this.handleSubmitUpdateConverter.bind(this)}
				/>
				<AddTransactionUnit
					transactionForm={this.state.transactionForm}
					onTransactionInputChange={this.handleTransactionInputChange.bind(this)}
					onSubmitAddTransaction={this.handleSubmitAddTransaction.bind(this)}
				/>
				<div className='row'>
					<div className='col-7'>
						<TransactionList
							transactions={this.props.transactions}
							handleRemoveTransaction={this.handleRemoveTransaction.bind(this)}
							euroToPlnConverter={this.props.euroToPlnConverter}
							totalAomuntEur={this.props.totalAomuntEur}
						/>
					</div>
					<div className='col-5'>
						<MaxTransactions
							maxTransactions={this.props.maxTransactions}
							euroToPlnConverter={this.props.euroToPlnConverter}
						/>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	euroToPlnConverter: getEuroToPlnConverter(state),
	transactions: getTransactions(state),
	totalAomuntEur: getTotalAmountEur(state),
	maxTransactions: getMaxTransactions(state),
});

TransactionPageContainer.propTypes = {
	dispatch: PropTypes.func,
	euroToPlnConverter: PropTypes.number,
	transactions: PropTypes.array,
	totalAomuntEur: PropTypes.number,
	maxTransactions: PropTypes.array,
};

export default connect(mapStateToProps)(TransactionPageContainer);
