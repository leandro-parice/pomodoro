import { useState } from "react";

import {
  Container,
  Box,
  Grid,
  Button,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const InputJob = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event) => {
    if (inputValue.length > 0) {
      props.handleJob(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue.length > 0) {
        props.handleJob(inputValue);
        setInputValue("");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <TextField
              type="text"
              onChange={onChangeHandler}
              value={inputValue}
              onKeyDown={handleKeyDown}
              label="Criar novo projeto"
              variant="standard"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={handleClick}>
              <SendIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default InputJob;
