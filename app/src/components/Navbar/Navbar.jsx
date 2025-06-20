import { Box, Stack, Typography } from "@mui/material"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
// import EditSquareIcon from '@mui/icons-material/EditSquare';

export default function Navbar() {

    return (
        <Box 
        sx={{
            width: "30%",
            height: "100vh"
        }}
        >
            
            <Box>
                
                <Stack direction="row" spacing={2} >

                    <Link to="/" >
                        <img src={Logo} alt="ai-logo" className={styles.logo} />
                    </Link>

                    <Typography>New Chat</Typography>

                </Stack>

            </Box>

        </Box>
    )
}