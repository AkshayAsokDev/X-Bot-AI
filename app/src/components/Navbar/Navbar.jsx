import { Box, Button, Stack, Typography, IconButton } from "@mui/material"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import NewChatIcon from "../../assets/newChatIcon.png"
import CloseIcon from "@mui/icons-material/Close";


export default function Navbar({isMobile, menuOpen, setMenuOpen}) {

    return (
        <Box 
        className={[styles.navbar, menuOpen && styles.navbarActive, isMobile && styles.navbarInactive ]}
        >
            
            <Box
            sx={{
                padding: "5px",
                backgroundColor: "#D7C7F4"
            }}
            >
                
                <Stack direction="row" spacing={2} 
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}
                >

                    <Link to="/" >
                        <img src={Logo} alt="ai-logo" className={styles.logo} />
                    </Link>

                    <Typography variant="h6" >New Chat</Typography>

                    <img src={NewChatIcon} alt="new-chat-icon" className={styles.newChat} />

                </Stack>

            </Box>

            <Stack spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                marginTop: "10px"
            }}
            >
                
                <Button variant="contained" 
                sx={{
                    width: "fit-content",
                    textTransform: "capitalize",
                }}
                component={Link}
                to="/history"
                >Past Conversations</Button>

                {
                    isMobile && (
                        <IconButton
                        onClick={() => {
                            setMenuOpen(false);
                        }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )
                }

            </Stack>

        </Box>
    )
}