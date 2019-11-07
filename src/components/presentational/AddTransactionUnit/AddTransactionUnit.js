import React from 'react';
import PropTypes from 'prop-types';
import './AddTransactionUnit.css';

const AddTransactionUnit = props => {
	return (
		<form onSubmit={props.onSubmitAddTransaction} className='container'>
			<legend>Add new transaction</legend>
			<div className='form-group row'>
				<label className='col-4 col-form-label' htmlFor='transactionName'>Name</label>
				<div className='col'>		
					<input
						className='form-control'
						type='text'
						id='transactionName'
						name='transactionName'
						value={props.transactionForm.transactionName}
						placeholder='Name of transaction'
						onChange={event => props.onTransactionInputChange(event)}
						required
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label className='col-4 col-form-label' htmlFor='amountEur'>Amount [EUR]</label>
				<div className='col'>		
					<input
						className='form-control'
						type='number'
						step='0.01'
						min='0.01'
						id='amountEur'
						name='amountEur'
						value={props.transactionForm.amountEur}
						onChange={event => props.onTransactionInputChange(event)}
						required
					/>
				</div>
			</div>
			<div className='row justify-content-end'>
				<button className='btn btn-success btn-add col-4'>Add transaction</button>
			</div>
		</form>
	);
};

AddTransactionUnit.propTypes = {
	transactionForm: PropTypes.object,
	onTransactionInputChange: PropTypes.func,
	onSubmitAddTransaction: PropTypes.func,
};

export default AddTransactionUnit;
