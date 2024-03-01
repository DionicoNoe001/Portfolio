import React from "react";
import { Box, Grid } from "@mui/material";

interface InnerBoxesGeneratorProps {
  count: number;
}

const InnerBoxesGenerator: React.FC<InnerBoxesGeneratorProps> = ({ count }) => {
  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < count; i++) {
      boxes.push(
        <Grid item xs={3} key={i} maxWidth="25vh">
          {/* Adjust xs value based on your layout */}
          <Box
            bgcolor={"#479464"}
            height="5vh"
            width="50px"
            borderRadius="10px"
            boxShadow="15"
          />
        </Grid>
      );
    }
    return boxes;
  };

  return (
    <Grid container spacing={1} height="80vh" maxWidth="25vh">
      {generateBoxes()}
    </Grid>
  );
};

const Home = () => {
  return (
    <>
      <Box bgcolor={"#387E44"} height="100vh" padding="5%">
        <Box
          bgcolor={"#479464"}
          height="80vh"
          borderRadius="20px"
          boxShadow="15"
        >
          {/* Custom component that generates boxes within the 2nd box with 1px gaps */}
          <InnerBoxesGenerator count={200} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
