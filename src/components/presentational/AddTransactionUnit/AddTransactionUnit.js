import React from 'react';
import PropTypes from 'prop-types';

const AddTransactionUnit = props => {
	return (
		<form onSubmit={props.onSubmitAddTransaction}>
			<fieldset>
				<legend>Add new transaction</legend>
				<div className='form-group row'>
					<label className='col-lg-2 col-form-label' htmlFor='transactionName'>Name</label>
					<div className='col-lg-3'>		
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
					<label className='col-lg-2 col-form-label' htmlFor='amountEur'>Amount [EUR]</label>
					<div className='col-lg-3'>		
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
				<div className='col-lg-5'>
					<button className='btn btn-success float-right'>Submit</button>
				</div>
			</fieldset>
		</form>
	);
};

AddTransactionUnit.propTypes = {
	transactionForm: PropTypes.object,
	onTransactionInputChange: PropTypes.func,
	onSubmitAddTransaction: PropTypes.func,
};

export default AddTransactionUnit;
