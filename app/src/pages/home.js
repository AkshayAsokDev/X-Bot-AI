import { Box, Typography, IconButton, Stack } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext } from "react-router-dom";


// AI Chat
export default function ChatWindow() {

    const { isMobile, setMenuOpen } = useOutletContext();
    
    

    return (
        <Box
        sx={{
            flexGrow: 1,
        }}
        >
            <Stack direction="row" spacing={2}
            sx={{
                padding: "5px",
                alignItems: "center",
                marginLeft: "20px"
            }}
            >

                {
                    isMobile && (
                        <IconButton
                        onClick={() => {
                            setMenuOpen(true);
                        }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )
                }
                
                <Typography
                variant="h1"
                fontSize="3rem"
                fontWeight="700"
                color="primary"
                >Bot AI</Typography>

            </Stack>
            
        </Box>
    )
}