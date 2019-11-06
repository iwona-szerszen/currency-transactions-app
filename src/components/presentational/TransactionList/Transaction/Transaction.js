import React from 'react';
import PropTypes from 'prop-types';

const Transaction = props => {
	return (
		<div className='row'>
			<div className='col'>
				{props.transaction.name}
			</div>
			<div className='col text-right'>
				{props.transaction.amountEur.toFixed(2)}
			</div>
			<div className='col text-right'>
				{(props.transaction.amountEur*props.euroToPlnConverter).toFixed(2)}
			</div>
			<div className='col'>
				<button 
					className='btn btn-secondary'
					onClick={() => props.removeTransaction(props.transaction.id)}
				>
					-
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
