import data from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="">
      <Pokemon pokemon={data[0]} />
    </div>
  );
}

export default App;
