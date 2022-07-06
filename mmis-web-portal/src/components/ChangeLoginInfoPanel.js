import { Button, Grid, Stack, TextField, Paper, List, ListItem, Select, MenuItem, Divider } from '@mui/material';

const ChangeLoginInfoPanel = () => {
    const questionMap = [1, 2, 3, 4, 5]
    const questions = [
        'What is your favourite brand of ice cream?',
        'Mothers maiden name?',
        'City you grew up in?',
        'Childhood bestfriends name?',
        'What did you want to be when you grew up?',
        'Name of your favourite pet?',
        'Who is your favourite historical person?',
        'Favourite park as a child?',
        'All time favourite music artist?',
        'Where would you like to travel next?'
    ]

    return (
        <form>
            <Paper square variant='outlined' sx={{ width: 1 }}>
                <Grid container columnSpacing='40' rowSpacing='25' sx={{ px: 6, pb: 2, pt: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            required
                            variant="standard"
                            type="email" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Password"
                            required
                            variant="standard"
                            type="password" />
                    </Grid>

                        {questionMap.map((index) => {
                            return (
                                <Grid container item columnSpacing='40' rowSpacing='25' my={{xs: 2, md: 0}} xs={12} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            label="Question"
                                            value={questions[index]}
                                            required />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            label="Answer"
                                            required />
                                    </Grid>
                                </Grid>      
                            );
                        })}
                    
                    <Grid item xs={12} spacing={3} my={2}>
                        <Stack direction='row' justifyContent="end" spacing={3}>
                            <Button type="reset" variant="contained" size="large" color="error" >Clear</Button>
                            <Button type="submit" variant="contained" size="large">Submit</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </form>
        );
};

export default ChangeLoginInfoPanel;