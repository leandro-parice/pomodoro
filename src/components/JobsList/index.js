import { Container, Box, Grid, Stack, Button } from "@mui/material";

const JobsList = (props) => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {props.jobs.map((job, index) => (
                <Button key={index} fullWidth>
                  {job}
                </Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default JobsList;
