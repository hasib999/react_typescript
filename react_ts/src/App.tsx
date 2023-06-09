import './App.css';
import ButtonStyle from './components/ButtonStyle';
const btnStyle = {
  backgroundColor:"green",
  padding:"0.5rem"
}
function App() {
  return (
    <div className="App">
      <h1>Style Props</h1>
      <ButtonStyle btnStyle = {btnStyle}/>
    </div>
  );
}

export default App;
