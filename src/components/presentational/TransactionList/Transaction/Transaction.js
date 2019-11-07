import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.css';

const Transaction = props => {
	return (
		<div className='row justify-content-between transaction'>
			<div className='col-3'>
				{props.transaction.name}
			</div>
			<div className='col-3 text-right'>
				{props.transaction.amountEur.toFixed(2)} EUR
			</div>
			<div className='col-4 text-right'>
				{(props.transaction.amountEur*props.euroToPlnConverter).toFixed(2)} PLN
			</div>
			<div className='col-2'>
				<button 
					className='btn btn-dark btn-sm float-right btn-remove'
					onClick={() => props.removeTransaction(props.transaction.id)}
				>
					x
				</button>
			</div>
		</div>
	);
};

Transaction.propTypes = {
	transaction: PropTypes.object,
	removeTransaction: PropTypes.func,
	euroToPlnConverter: PropTypes.number,
};

export default Transaction;
