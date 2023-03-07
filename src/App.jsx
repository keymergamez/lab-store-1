import Products from "./components/Products";
import "./App.css"

import { Routes, Route } from "react-router-dom"; //Routes will wrap all our single Route. We will start with just one component.

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
