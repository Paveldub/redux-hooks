import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({
      type: 'ADD_CASH',
      payload: 1,
    });
  };

  const getCash = (cash) => {
    dispatch({
      type: 'GET_CASH',
      payload: 1,
    });
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash()}>Add cash /+/ </button>
      <button onClick={() => getCash()}>Get cash /-/ </button>
    </div>
  );
}

export default App;
