import { Box, Typography, IconButton, Stack } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext } from "react-router-dom";
import ChatCard from "../components/ChatCard/ChatCard";


const dummyData = {
    type: "chat",
    isUser: false,
    time: "10:33 am",
    content: "Lorem ipsum"
}

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

            <Box
            sx={{
                flexGrow: 1,
            }}
            >
                {/* <ChatCard 
                type={dummyData.type}
                isUser={dummyData.isUser}
                time={dummyData.time}
                content={dummyData.content}
                /> */}
            </Box>
            
        </Box>
    )
}