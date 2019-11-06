import React from 'react';
import PropTypes from 'prop-types';

const ConverterUnit = props => {
	return (
		<form onSubmit={props.onSubmitUpdateConverter}>
			<legend>Currency converter</legend>
			<div className='form-group row'>
				<div className='col-lg-2'>1 EUR =</div>
				<div className='col-lg-3'>		
					<input
						className='form-control'
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
				<div className='col-lg-2'>PLN</div>
			</div>
			<div className='col-lg-5'>
				<button className='btn btn-success float-right'>Update converter</button>
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
