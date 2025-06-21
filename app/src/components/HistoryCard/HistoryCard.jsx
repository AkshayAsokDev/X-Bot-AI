import { Box, Typography, Stack } from "@mui/material"
import ChatCard from "../ChatCard/ChatCard"
import styles from "./HistoryCard.module.css"


// data is array which contains list of objects - that is 1 convo history, which consists of each chat as an object
export default function HistoryCard ({data}) {

    return (
        <Box
        style={{
            flexGrow: 1,
            margin: "15px 45px 15px 15px",
            borderRadius: "20px"
        }}
        className={styles.historyCard}
        >

            {
                data.map((chat, index) => {

                    return <ChatCard 
                    key={index}
                    type={chat.type} isUser={chat.isUser} time={chat.time} content={chat.content} />
                })
            }


        </Box>
    )
}