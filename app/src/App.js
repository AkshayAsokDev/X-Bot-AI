import './App.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Stack direction="row">

          <Navbar />

          <Stack spacing={2}
          >
              <Outlet />
              <Searchbar />
          </Stack>

      </Stack>

    </div>
  );
}

export default App;
