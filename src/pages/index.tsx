import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

interface InnerBoxesGeneratorProps {
  count: number;
}

const InnerBoxesGenerator: React.FC<InnerBoxesGeneratorProps> = ({ count }) => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Adjust the radius value based on your preference
    const hoverRadius = 50;

    const boxPosition = event.currentTarget.getBoundingClientRect();
    const boxCenterX = boxPosition.left + boxPosition.width / 2;
    const boxCenterY = boxPosition.top + boxPosition.height / 2;

    const distance = calculateDistance(mouseX, mouseY, boxCenterX, boxCenterY);

    if (distance <= hoverRadius) {
      setHoveredBox(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < count; i++) {
      const isHovered = hoveredBox === i;
      boxes.push(
        <Grid item xs={0.36} key={i}>
          {/* Adjust xs value based on your layout */}
          <div
            className={`box ${isHovered ? "hovered" : ""}`}
            onMouseEnter={(event) => handleMouseEnter(i, event)}
            onMouseLeave={handleMouseLeave}
          ></div>
        </Grid>
      );
    }
    return boxes;
  };

  return (
    <Grid container spacing={0.5} height="5vh">
      {generateBoxes()}
    </Grid>
  );
};

const Home = () => {
  return (
    <>
      <style>{`
        .box {
          position: relative;
          background-color: #479464;
          height: 5vh;
          width: 50px;
          border-radius: 10px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
          transition: background-color 0.3s;
        }

        .box.hovered {
          background-color: #5fa878;
        }

        .box:hover {
          background-color: #5fa878;
        }
      `}</style>
      <Box bgcolor={"#387E44"} height="100vh" padding="5%">
        <Box>
          {/* Custom component that generates boxes within the 2nd box with 1px gaps */}
          <InnerBoxesGenerator count={462} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
