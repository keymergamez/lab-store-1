import { Products } from "./components/Products";

import { Routes, Route } from "react-router-dom"; //Routes will wrap all our single Route. We will start with just one component.

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Kitchen" element={<Kitchen />} />
        <Route path="Neworder" element={<Neworder />} />
        <Route path="Chooseorder" element={<Chooseorder />} />
        <Route path="Breakfast" element={<Breakfast />} />
        <Route path="Food" element={<Food />} />
      </Routes>
    </>
  );
};

export default App;
