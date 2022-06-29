import { Chip, Stack, Button } from "@mui/material";

const VSPageHeader = (props) => {
    const person1 = props.person1
    const person2 = props.person2

    return (
        <Stack direction="row" spacing={{xs: 2, md: 4, lg: 6}} sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <Button variant='outlined'>{person1}</Button>
            <Chip size="medium" variant='outlined' label="vs." />
            <Button variant='outlined'>{person2}</Button>
        </Stack>
        );
};

export default VSPageHeader;