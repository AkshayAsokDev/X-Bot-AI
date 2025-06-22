import { Box, TextField, Button, Stack } from "@mui/material"
import styles from "./Searchbar.module.css"
import { useState } from "react"
import { useOutletContext } from "react-router-dom";


import FeedbackModal from "../FeedbackModal/FeedbackModal";

export default function Searchbar({addChat, fetchAIResponse}) {

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    


    const handleFormSubmit = (e) => {
        console.log("search submit >> ", e.target.elements.search.value)

        let time = new Date();
        time = time.toLocaleTimeString('en-In', {
            hour: "numeric",
            minute: "numeric"
        })
        console.log("time >> ", time);

        addChat("chat", true, time, e.target.elements.search.value);

        // fetchAIResponse(e.target.elements.search.value);
    }

    return (
        <Box
        sx={{
            display: "block",
        }}
        >

            <form className={styles.searchForm}
            onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(e);
            }}
            >

                <TextField variant="outlined" placeholder="Message Bot AI..." 
                sx={{
                    width: "80%",
                    backgroundColor: "#ffffff"
                }}
                name="search"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />

                <Button variant="contained"
                color="secondary"
                type="submit"
                sx={{
                    fontSize: "1.5rem"
                }}
                >Ask</Button>
                
                <Button variant="contained"
                color="secondary"
                type="button"
                sx={{
                    fontSize: "1.5rem"
                }}
                onClick={() => {
                    setIsOpen(true);
                }}
                >Save</Button>

                <FeedbackModal isOpen={isOpen} setIsOpen={setIsOpen} />

            </form>

        </Box>
    )
}