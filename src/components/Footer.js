import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
const Footer = () => {
    return (
        <Box
            w={"full"}
            bgColor={"teal.800"}
            color={"white"}
            px={10}
            py={5}
            mt={"20px"}
        >
            <SimpleGrid
                justifyContent={"end"}
                columns={[1, 1, 3, 3]}
                spacing={10}
            >
                <Box>
                    <Heading>About</Heading>
                    <Text mt={"20px"} align={"justify"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit, adipisci ea? Iusto, veritatis voluptatum! Pariatur
                        architecto asperiores est sint delectus inventore iure
                        iusto voluptas? Ab at deleniti ipsam voluptatibus alias.
                    </Text>
                </Box>
                <Box>
                    <Heading>Contact</Heading>
                    <Text mt={"20px"} align={"justify"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit, adipisci ea? Iusto, veritatis voluptatum! Pariatur
                        architecto asperiores est sint delectus inventore iure
                        iusto voluptas? Ab at deleniti ipsam voluptatibus alias.
                    </Text>
                </Box>
                <Box>
                    <Heading>Maps</Heading>
                    <Text mt={"20px"} align={"justify"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit, adipisci ea? Iusto, veritatis voluptatum! Pariatur
                        architecto asperiores est sint delectus inventore iure
                        iusto voluptas? Ab at deleniti ipsam voluptatibus alias.
                    </Text>
                </Box>
            </SimpleGrid>
            <Box textAlign={"center"} mt={"10"} mb={"0"}>
                &copy; 2022 | All Right Reserved
            </Box>
        </Box>
    );
};

export default Footer;
