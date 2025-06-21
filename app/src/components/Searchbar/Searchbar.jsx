import { Box, TextField, Button, Stack } from "@mui/material"
import styles from "./Searchbar.module.css"
import { useState } from "react"


import FeedbackModal from "../FeedbackModal/FeedbackModal";

export default function Searchbar() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <Box
        sx={{
            display: "block",
        }}
        >

            <form className={styles.searchForm}>

                <TextField variant="outlined" placeholder="Message Bot AI…" 
                sx={{
                    width: "80%",
                    backgroundColor: "#ffffff"
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