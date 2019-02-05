import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('test should edit expense action object', () => {
  const action = editExpense('123abc', {note: 'New note value'  });
  expect(action).toEqual({
    "id": "123abc", 
    "type": "EDIT_EXPENSE", 
    "updates": {
      "note": "New note value"
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with no provided values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
    }
  })
})