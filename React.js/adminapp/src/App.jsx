import { Routes, Route } from 'react-router-dom';
import LoginAdmin from './compoment/LoginAdmin';
import UIAdmin from './UiAdmin/UIAdmin';
import Addproduct from './UiAdmin/Addproduct';
import AddCatalog from './UiAdmin/AddCatalog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginAdmin />} />
      <Route path="/admin/Uiadmin" element={<UIAdmin />} />
      <Route path='/admin/Uiadmin/AddCatalog' element={<AddCatalog />} />
      <Route path="/admin/Uiadmin/Addproduct" element={<Addproduct />} />
    </Routes>
  );
}

export default App;
