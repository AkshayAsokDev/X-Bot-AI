import { Box, TextField, Button, Stack } from "@mui/material"


export default function Searchbar() {

    return (
        <Box>

            <form>

                <TextField variant="outlined" placeholder="Message Bot AI…" />

                <Button variant="contained"
                type="submit"
                sx={{
                    fontSize: "1.5rem"
                }}
                >Ask</Button>
                
                <Button variant="contained"
                type="button"
                sx={{
                    fontSize: "1.5rem"
                }}
                >Save</Button>

            </form>

        </Box>
    )
}