
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <BrowserRouter>

<Toaster />
        <Routes>
            <Route path='/sign-in' element={<Signin />}></Route>
            <Route path='/sign-up' element={<Signup />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
