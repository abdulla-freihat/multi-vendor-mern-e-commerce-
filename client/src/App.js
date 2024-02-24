
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/sign-in' element={<Signin />}></Route>
            <Route path='/sign-up' element={<Signup />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
