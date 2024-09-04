import logo from './logo.svg';
import './App.css';
import UserManageMain from '../src/view/admin/user-list/user-manage-main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/user-main" element={<UserManageMain />}></Route>
      </Routes>

    </div>
  );
}

export default App;
