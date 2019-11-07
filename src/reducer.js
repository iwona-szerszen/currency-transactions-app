import { UPDATE_CONVERTER, ADD_TRANSACTION, REMOVE_TRANSACTION } from './actions';
import transactionsData from './data/transactions.json';

// Initial State
const initialState = {
	euroToPlnConverter: 4.26,
	transactions: transactionsData,
};

// Reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (UPDATE_CONVERTER):
			return Object.assign({}, state, {euroToPlnConverter: action.euroToPlnConverter});
		case (ADD_TRANSACTION):
			return Object.assign({}, state, {transactions: [...state.transactions, action.transaction]});
		case (REMOVE_TRANSACTION):
			const notRemovedTransactions = state.transactions.filter(transaction => {
				return (transaction.id !== action.id);
			});
			return Object.assign({}, state, {transactions: notRemovedTransactions});
		default:
			return state;
	}
};

// Selectors

// Get EUR to PLN converter
export const getEuroToPlnConverter = state => state.euroToPlnConverter;

// Get all transactions
export const getTransactions = state => state.transactions;

// Get sum of all transactions
export const getTotalAmountEur = state => {
	return state.transactions.reduce((acc, item) => acc + item.amountEur, 0);
};

// Get transaction with max amount [EUR]
export const getMaxTransactions = state => {
	if (state.transactions.length) {
	    // Create array of all the amounts [EUR]
		const amountsEur = [];
		state.transactions.forEach(item => amountsEur.push(item.amountEur));

		// Find the max amount [EUR]
		let maxAmountEur = amountsEur.reduce((a,b) => Math.max(a,b));

		// Return transactions with max amount [EUR] - it is acceptable to be more then one
		// transactions with the same max amount
		return state.transactions.filter(transaction => transaction.amountEur === maxAmountEur);
	} else {
		return [];
	}	
};

export default reducer;
