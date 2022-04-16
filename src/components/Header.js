import {
    Box,
    Flex,
    Heading,
    IconButton,
    Img,
    Spacer,
    Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Outlet } from "react-router-dom";
const Header = () => {
    const [navColor, setNavColor] = useState("");
    const handleScroll = (e) => {
        if (window.scrollY > 400) {
            setNavColor("white");
        } else {
            setNavColor("");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <>
            <Flex
                px={[5, 5, 10, 10]}
                py={[2, 2, 5, 5]}
                position={"fixed"}
                w={"full"}
                bgColor={navColor}
            >
                <Box>
                    <Heading>
                        <Img src={"images/title-img.png"} width={"48"} />
                    </Heading>
                </Box>
                <Spacer />
                <Box>
                    <IconButton
                        icon={<FaCartArrowDown />}
                        fontSize={"2xl"}
                        p={2}
                        mr={3}
                    />
                    <Button>Login</Button>
                </Box>
            </Flex>
        </>
    );
};

export default Header;
