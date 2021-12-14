import Header from './component/Header'
import Button from './component/Button'
import 'bootstrap'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="conatainer">
        <Button title="Add to Cart" class="btn btn-primary"/>
        <Button title="Remove From Cart" className="btn btn-danger"/>
      </div>
    </div>
  );
}

export default App;
