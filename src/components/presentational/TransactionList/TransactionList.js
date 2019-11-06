import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction/Transaction';

const TransactionList = props => {
	return (
		<div>
			{props.transactions.map(item => {
				return (
					<Transaction 
						key={item.id}
						transaction={item}
						removeTransaction={props.handleRemoveTransaction}
						euroToPlnConverter={props.euroToPlnConverter}
						totalAomuntEur={props.totalAomuntEur}
					/>
				);
			})}
			<div className='row'>
			    <div className='col'>Total</div>
			    <div className='col text-right'>{props.totalAomuntEur.toFixed(2)}</div>
			    <div className='col text-right'>{(props.totalAomuntEur*props.euroToPlnConverter).toFixed(2)}</div>
			</div>
		</div>
	);
};

TransactionList.propTypes = {
	transactions: PropTypes.array,
	handleRemoveTransaction: PropTypes.func,
	euroToPlnConverter: PropTypes.number,
	totalAomuntEur: PropTypes.number,
}

export default TransactionList;
