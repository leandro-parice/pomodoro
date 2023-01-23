import { Container, Box, Grid, Typography, Button } from "@mui/material";

import { useState, useEffect } from "react";

const Timer = (props) => {
  const [time, setTime] = useState("00:00");
  const [counter, setCounter] = useState(180);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (counter > 0) {
          setCounter(counter - 1);

          let minutes = Math.floor(counter / 60);
          let seconds = counter - minutes * 60;

          if (minutes < 10) {
            minutes = `0${minutes}`;
          }

          if (seconds < 10) {
            seconds = `0${seconds}`;
          }

          setTime(`${minutes}:${seconds}`);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  const handleReset = () => {
    setCounter(200);
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h2">
              {time}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleReset} fullWidth>
              Start
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handlePauseToggle} fullWidth>
              Pause
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Timer;
