import React from "react";
import { Box, Image, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useFirestore } from "../hooks/useFirestore";

export const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <Grid
      p="4"
      className="imageGrid"
      templateColumns="repeat(3, 1fr)"
      gap={5}
      w="full"
      align="center"
    >
      {docs &&
        docs.map((doc) => (
          <GridItem className="imageWrap">
            <Image key={doc.id} src={doc.url} alt="pic" className="img"></Image>
          </GridItem>
        ))}
    </Grid>
  );
};
