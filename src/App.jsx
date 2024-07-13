import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";



export const App = () => {
  return (
    <div>
      <NavBar />
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
      <Cart />
    </div>
  );
};

function TApp() {
  return (
    <div className="App">
     
     

    </div>
  );
}

export default App;
