import React from 'react';
import PropTypes from 'prop-types';

const MaxTransactions = props => {
	return (
		<div>
			<h4>Maximum transaction(s)</h4>
			{props.maxTransactions.map(item => {
				return (
					<div className='row'>
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
	);
};

MaxTransactions.propTypes = {
	maxTransactions: PropTypes.array,
	euroToPlnConverter: PropTypes.number,
};

export default MaxTransactions;
