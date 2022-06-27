const { Paper, Typography, Alert, AlertTitle } = require("@mui/material");


const PageInfo = (props) => {
    const header = props.header;
    const info = props.info;
    const highlightInfo = props.highlightInfo;

    return (
        <Paper square variant="outlined" elevation={0}>
            <Alert severity="info">
                <AlertTitle>{header}</AlertTitle>
                <Typography>
                    {info}
                </Typography>
                <Typography sx={{mt: 1}}>
                    <b>{highlightInfo}</b>
                </Typography>
            </Alert>
        </Paper>
        );
}

export default PageInfo;