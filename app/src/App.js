import styles from './App.module.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';


function App() {

  const isMobile = useMediaQuery("(max-width:900px)");
  console.log("isMobile >> ", isMobile);
  const [menuOpen, setMenuOpen] = useState(false);

  const outletData = {
    isMobile,
    menuOpen,
    setMenuOpen
  };

  return (
    <div className="App">
      
      <Stack direction="row"
      className={menuOpen && styles.appContainer}
      >

          <Navbar isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Stack spacing={2}
          className={[styles.appDesktop, isMobile && styles.appMobile ]}
          >
              <Outlet context={outletData} />
              <Searchbar />
          </Stack>

      </Stack>

    </div>
  );
}

export default App;
