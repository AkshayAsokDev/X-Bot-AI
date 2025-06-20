import { Box, TextField, Button, Stack } from "@mui/material"
import styles from "./Searchbar.module.css"

export default function Searchbar() {

    return (
        <Box>

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
                >Save</Button>

            </form>

        </Box>
    )
}