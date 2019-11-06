import uuidv4 from 'uuid/v4';

export const UPDATE_CONVERTER = 'UPDATE_CONVERTER';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

export const updateConverter = euroToPlnConverter => ({
	type: UPDATE_CONVERTER,
	euroToPlnConverter,
});

export const addTransaction = transaction => ({
	type: ADD_TRANSACTION,
	transaction: {...transaction, id: uuidv4()}, 
});

export const removeTransaction = transactionId => ({
	type: REMOVE_TRANSACTION,
	id: transactionId,
});
