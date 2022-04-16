import { Button, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
    return (
        <Flex
            w={"full"}
            h={"100vh"}
            backgroundImage={"url(images/hero.jpg)"}
            backgroundSize={"cover"}
        >
            <VStack w={"full"} justify={"center"}>
                <Stack
                    direction={"row"}
                    justify={"space-between"}
                    width={"full"}
                    p={"20"}
                >
                    <Stack>
                        <Heading color={"white"}>Lorem Ipsum.</Heading>
                        <Stack direction={"row"}>
                            <Button
                                bg={"teal.400"}
                                rounded={"full"}
                                color={"white"}
                                _hover={{ bg: "teal.500" }}
                            >
                                Show me more
                            </Button>
                            <Button
                                bg={"whiteAlpha.300"}
                                rounded={"full"}
                                color={"white"}
                                _hover={{ bg: "whiteAlpha.500" }}
                            >
                                Show me more
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
};

export default Hero;
