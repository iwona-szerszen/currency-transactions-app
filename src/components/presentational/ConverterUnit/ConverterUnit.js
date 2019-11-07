import React from 'react';
import PropTypes from 'prop-types';

const ConverterUnit = props => {
	return (
		<form onSubmit={props.onSubmitUpdateConverter} className='container'>
			<legend>Currency converter</legend>
			<div className='form-group row justify-content-end align-items-center'>
				<div className='col-4 text-right'>1 EUR =</div>
				<div className='col-2'>		
					<input
						className='form-control text-center'
						type='number'
						step='0.01'
						min='0.01'
						id='converter'
						name='converter'
						value={props.converterInput}
						onChange={event => props.onConverterInputChange(event)}
						required
					/>
				</div>
				<div className='col-2'>PLN</div>
				<div className='col-4'>
					<button className='btn btn-info float-right'>Update converter</button>
				</div>
			</div>
	
		</form>
	);
};

ConverterUnit.propTypes = {
	converterInput: PropTypes.number,
	onConverterInputChange: PropTypes.func,
	onSubmitUpdateConverter: PropTypes.func,
};

export default ConverterUnit;
