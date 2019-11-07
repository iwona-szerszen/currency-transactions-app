import React from 'react';
import PropTypes from 'prop-types';
import './MaxTransactions.css';

const MaxTransactions = props => {
	return (
		<div>
			{props.maxTransactions.length > 0 && 
				<div className='container'>
					<h5>Maximum transaction(s)</h5>
					{props.maxTransactions.map(item => {
						return (
							<div className='row max-transaction'>
								<div className='col'>
									{item.name}
								</div>
								<div className='col'>
									{(item.amountEur*props.euroToPlnConverter).toFixed(2)} PLN
								</div>
								<div className='col'>
									{item.amountEur.toFixed(2)} EUR
								</div>
							</div>
						);
					})}
				</div>
			}
		</div>
	);
};

MaxTransactions.propTypes = {
	maxTransactions: PropTypes.array,
	euroToPlnConverter: PropTypes.number,
};

export default MaxTransactions;
