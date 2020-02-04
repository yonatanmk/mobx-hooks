import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { CounterStoreContext } from "./stores/CounterStore"

const App = observer(() => {
  const counterStore = useContext(CounterStoreContext)

  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <button onClick={()=> counterStore.count++}>Increment</button>
    </div>
  );
});

export default App;
