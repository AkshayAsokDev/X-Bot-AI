import { Box, Typography, Stack } from "@mui/material"
import ChatCard from "../ChatCard/ChatCard"
import styles from "./HistoryCard.module.css"

const dummyFeedData = {
    0 : "It was good"
}

// data is array which contains list of objects - that is 1 convo history, which consists of each chat as an object
export default function HistoryCard ({data, feedIndex}) {


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

            {/* Feedback generate */}

            {
                Object.hasOwn(dummyFeedData, feedIndex) && (
                    <Typography
                    margin="25px"
                    paddingLeft="25px"
                    ><span className={styles.feedback} >Feedback : </span>{dummyFeedData[feedIndex]}</Typography>
                )
            }


        </Box>
    )
}