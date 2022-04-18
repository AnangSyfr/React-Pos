import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Center,
    Heading,
    Spinner,
    Img,
    Stack,
    Text,
    Button,
    Icon,
    IconButton,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const DetailMenu = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });

    useEffect(() => {
        const getProducts = async () => {
            let response = await axios.get(
                `https://open-minded.my.id/pos/api/product/${id}`
            );
            if (response.status === 200) {
                setProduct(response.data.data);
                setLoading(false);
                console.log(product);
            }
        };

        getProducts();
    }, []);
    return (
        <Box
            mt={"-16"}
            mx={"auto"}
            w={"90vw"}
            bgColor={"white"}
            p={10}
            borderRadius={"10px"}
        >
            <Heading>
                <IconButton
                    icon={
                        <ChevronLeftIcon fontSize={"2xl"} fontWeight={"bold"} />
                    }
                    mt={"-5px"}
                    mr={"10px"}
                    onClick={() => navigate("/")}
                />
                Detail Menu
            </Heading>
            {loading ? (
                <Center>
                    <Spinner />
                </Center>
            ) : (
                product.map((pr) => (
                    <Stack direction={"row"} mt={"5"}>
                        <Box mr={"20px"}>
                            <Img
                                src={pr.path}
                                width={["full", "full", "300px", "300px"]}
                            />
                        </Box>
                        <Box pt={"30px"}>
                            <Heading>{pr.nama}</Heading>
                            <Text>{formatter.format(pr.harga)}</Text>
                            <Button mt={"10px"}>
                                <Center>
                                    <FaCartArrowDown />
                                    <Text mt={"5px"} mx={"2"}>
                                        Add To Cart
                                    </Text>
                                </Center>
                            </Button>
                        </Box>
                    </Stack>
                ))
            )}
        </Box>
    );
};

export default DetailMenu;
