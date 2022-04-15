import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Flex,
  Text,
  Container,
  useColorModeValue,
  Image,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";
import NextLink from "next/link";

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Overview() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Beneficio 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet, quam suspendisse duis rutrum blandit. A auctor odio nulla in mauris. Pretium, massa eget vulputate nisl vitae odio. Velit leo nunc tortor ",
      image:
        "https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998156/Tecuido/overviewUp_vla2gj.png",
    },
    {
      title: "Beneficio 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet, quam suspendisse duis rutrum blandit. A auctor odio nulla in mauris. Pretium, massa eget vulputate nisl vitae odio. Velit leo nunc tortor ",
      image:
        "https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998156/Tecuido/overviewUp_vla2gj.png",
    },
    {
      title: "Beneficio 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet, quam suspendisse duis rutrum blandit. A auctor odio nulla in mauris. Pretium, massa eget vulputate nisl vitae odio. Velit leo nunc tortor ",
      image:
        "https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998156/Tecuido/overviewUp_vla2gj.png",
    },
  ];

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#F8F7F2", "gray.800")}
    >
      {/* <Image src='https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998156/Tecuido/overviewUp_vla2gj.png' alt='te cuido' /> */}

      <Box
        // position={"relative"}
        height={"800px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          colorScheme="#3ABEEC"
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          colorScheme="#3ABEEC"
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index} height={"6xl"} position="relative">
              {/* Change to customize the caption */}
              {/* https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998648/Tecuido/overview3intro_xmi14x.png */}
              {index !== 2 ? (
                <Center my={{ base: "30px", lg: "50px" }}>
                  <Image
                    src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998156/Tecuido/overviewUp_vla2gj.png"
                    alt="te cuido"
                  />
                </Center>
              ) : (
                <Center my={{ base: "30px", lg: "50px" }}>
                  <Image
                    src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998648/Tecuido/overview3intro_xmi14x.png"
                    alt="te cuido"
                  />
                </Center>
              )}
              <Container size="container.lg" height="500px">
                <Stack
                  direction="column"
                  spacing={10}
                  w={"full"}
                  maxW={"lg"}
                  position="relative"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    align="center"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  >
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                  {index !== 2 ? (
                    <Stack>
                      {/* <Button
                        isDisabled
                        px={38}
                        bg={"#E5E5E5"}
                        color={"white"}
                        size={"lg"}
                      >
                        Entrar
                      </Button> */}
                      <Center my={{ base: "30px", lg: "60px" }}>
                        <Image
                          src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998165/Tecuido/overviewDown_ubub5z.png"
                          alt="te cuido"
                        />
                      </Center>
                    </Stack>
                  ) : (
                    <NextLink href="/registro" passHref>
                      <Button
                        px={38}
                        bg={"#3ABEEC"}
                        color={"white"}
                        size={"lg"}
                        _hover={{
                          bg: "#15a4d7",
                        }}
                      >
                        Entrar
                      </Button>
                    </NextLink>
                  )}
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
