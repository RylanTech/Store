import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
