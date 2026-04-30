// This is a very small test component
// We are using it to check whether React itself is rendering correctly
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes";
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes  />
    </div>
  );
}

export default App;