import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction/Transaction';
import './TransactionList.css';

const TransactionList = props => {
	return (
		<div>
			{props.transactions.length > 0 ? (
				<div className='container'>
					<h5>Transactions</h5>
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
					<div className='row total'>
					    <div className='col-3'>Total</div>
					    <div className='col-3 text-right'>{props.totalAomuntEur.toFixed(2)} EUR</div>
					    <div className='col-4 text-right'>{(props.totalAomuntEur*props.euroToPlnConverter).toFixed(2)} PLN</div>
					</div>
				</div>				
			) : (
				<div className='no-transactions-info'>
					No currency transactions have been carried out. In order to add one, use the form.
				</div>
			)}
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
