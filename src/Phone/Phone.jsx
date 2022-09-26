import { Burger, Grid, Text } from "@mantine/core";
import React, { useState } from "react";
import {
  Box,
  Header,
  Line,
  Main,
  PhoneBox,
  PhoneScreen,
  Round,
  Wrapper,
} from "./Phone.style";
import bugatti from "../assets/images/bugatti.jfif";
import lamborghini from "../assets/images/lamborghini.jfif";
import rollsroyce from "../assets/images/rollsroyce.jfif";
import avtr from "../assets/images/avtr.webp";
import lotus from "../assets/images/lotus.jpg";
import tesla from "../assets/images/tesla.jpg";
import mustang from "../assets/images/mustang.jpg";

const Phone = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <Wrapper>
      <PhoneBox>
        <Line></Line>
        <PhoneScreen>
          <Header>
            <Text color="white" size={25}>
              Alex
            </Text>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color="white"
            />
          </Header>
          <Main>
            <h1>Website</h1>
            <p>This website about cars.</p>
            <Box>
              <img src={bugatti} alt="bugatti" />
            </Box>
            <Box>
              <img src={lamborghini} alt="lamborghini" />
            </Box>
            <Box>
              <img src={rollsroyce} alt="rollsroyce" />
            </Box>
            <Box>
              <img src={avtr} alt="avtr" />
            </Box>
            <Box>
              <img src={lotus} alt="lotus" />
            </Box>
            <Box>
              <img src={tesla} alt="tesla" />
            </Box>
            <Box>
              <img src={mustang} alt="mustang" />
            </Box>
          </Main>
        </PhoneScreen>
        <Round></Round>
      </PhoneBox>
    </Wrapper>
  );
};

export default Phone;
