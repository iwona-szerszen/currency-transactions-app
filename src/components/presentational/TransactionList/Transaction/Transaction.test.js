import React from 'react';
import { shallow } from 'enzyme';
import Transaction from './Transaction';

describe('<Transaction>', () => {
	it('renders without crashing when giving the required props', () => {
		const props = {
			transaction: {
				id: '',
				name: '',
				amountEur: 0,
			},
			removeTransaction: jest.fn(),
			euroToPlnConverter: 0,
		};
		shallow(<Transaction {...props} />);
	});

	it('renders correct name', () => {
		const props = {
			transaction: {
				id: '1',
				name: 'Transaction test name',
				amountEur: 1000,
			},
			removeTransaction: jest.fn(),
			euroToPlnConverter: 4,
		};
		const transactionNameExpected = props.transaction.name;

		const transactionComponent = shallow(<Transaction {...props} />);
		const transactionNameRendered = transactionComponent.find('.name').text();

		expect(transactionNameRendered).toEqual(transactionNameExpected);
	});

	it('renders correct amount [EUR]', () => {
		const props = {
			transaction: {
				id: '1',
				name: 'Transaction test name',
				amountEur: 1000,
			},
			removeTransaction: jest.fn(),
			euroToPlnConverter: 4,
		};
		const transactionAmountEurExpected = props.transaction.amountEur.toFixed(2);

		const transactionComponent = shallow(<Transaction {...props} />);
		const transactionAmountEurRendered = transactionComponent.find('.amountEur').text();

		expect(transactionAmountEurRendered).toEqual(`${transactionAmountEurExpected} EUR`);
	});

	it('renders correct amount [PLN]', () => {
		const props = {
			transaction: {
				id: '1',
				name: 'Transaction test name',
				amountEur: 1000,
			},
			removeTransaction: jest.fn(),
			euroToPlnConverter: 4,
		};
		const transactionAmountPlnExpected = (props.transaction.amountEur*props.euroToPlnConverter).toFixed(2);

		const transactionComponent = shallow(<Transaction {...props} />);
		const transactionAmountPlnRendered = transactionComponent.find('.amountPln').text();

		expect(transactionAmountPlnRendered).toEqual(`${transactionAmountPlnExpected} PLN`);
	});

	it('should call \'removeTransaction\' with transaction\'s id when \'x\' button is clicked', () => {
		const mockedRemoveTransaction = jest.fn();
		const props = {
			transaction: {
				id: '1',
				name: 'Transaction test name',
				amountEur: 1000,
			},
			removeTransaction: mockedRemoveTransaction,
			euroToPlnConverter: 4,
		};

		const transactionComponent = shallow(<Transaction {...props} />);
		const removeButton = transactionComponent.find('.btn-remove');
		removeButton.simulate('click');

		expect(mockedRemoveTransaction).toBeCalledWith(props.transaction.id);
	});
});
