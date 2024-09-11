import logo from './logo.svg';
import './App.css';
import UserManageMain from '../src/view/admin/user-list/user-manage-main';
import UserLoginMain from '../src/view/user-login/login-main';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/layout/layout.css';
import AppMain from "./view/layout/AppMain";
import AppTopBar from "./view/layout/AppTopBar";

function App() {


  return (
      <div className="App">
          {/*      <header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*</header>*/}
              <Routes>
                  <Route path="/" element={<AppMain />}>
                      <Route path="user-main" element={<UserManageMain />} />
                      <Route path="login" element={<UserLoginMain />} />
                  </Route>
              </Routes>

      </div>
  );
}

export default App;
