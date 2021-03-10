import { useState } from 'react';
import data from './data/sensor_readings';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import './App.css';

function App() {
  const [state, setState] = useState(true);

  const Button = () => (
		<button onClick={() => setState(!state)}>Toggle Tables</button>
  );

	return (
    <div className="App">
      <Button />
      { state
        ? <Table1 data={data}/>
        : <Table2 data={data}/>
      }
		</div>
	);
}

export default App;
