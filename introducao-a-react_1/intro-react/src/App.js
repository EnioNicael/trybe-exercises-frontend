
const tasksList = ['Acordar', 'Tomar cafe', 'Trabalhar', 'Jogar Futebol', 'Dormir'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  return (
    <ul>
      {tasksList.map(item => task(item))}
    </ul>
  );
}

export default App;
