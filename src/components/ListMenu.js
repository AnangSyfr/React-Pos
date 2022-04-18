import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Img,
    SimpleGrid,
    Spinner,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListMenu = () => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const dataLimit = 6;
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    const getPaginatedData = () => {
        const startIndex = page * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;

        return products.slice(startIndex, endIndex);
    };
    useEffect(() => {
        const getProducts = async () => {
            let response = await axios.get(
                "https://open-minded.my.id/pos/api/product"
            );
            if (response.status === 200) {
                setProducts(response.data.data);
                setLoading(false);
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
            <Heading>Daftar Menu</Heading>
            {loading ? (
                <Center>
                    <Spinner />
                </Center>
            ) : (
                <>
                    <Center>
                        <SimpleGrid
                            justifyContent={"end"}
                            columns={[2, 3, 3, 3]}
                            spacing={10}
                        >
                            {getPaginatedData().map((product, index) => {
                                return (
                                    <Box textAlign={"center"}>
                                        <Img
                                            src={product.path}
                                            w={"full"}
                                            h={[
                                                "100px",
                                                "100px",
                                                "300px",
                                                "300px",
                                            ]}
                                            p={[0, 0, 10, 10]}
                                        />
                                        <Text
                                            fontSize={["md", "md", "lg", "2xl"]}
                                            fontWeight={"bold"}
                                        >
                                            <Link
                                                to={`/detail-menu/${product.id}`}
                                            >
                                                {product.nama}
                                            </Link>
                                        </Text>
                                        <Text>
                                            {formatter.format(product.harga)}
                                        </Text>
                                        <Button>Add</Button>
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    </Center>
                    <Container textAlign={"center"} mt={"5"}>
                        {page === 1 ? (
                            ""
                        ) : (
                            <Button
                                mr={"3"}
                                onClick={() => {
                                    setPage(page - 1);
                                }}
                            >
                                Prev
                            </Button>
                        )}

                        {products.length > dataLimit ? (
                            <Button
                                colorScheme={"teal"}
                                onClick={() => {
                                    setPage(page + 1);
                                }}
                            >
                                Next
                            </Button>
                        ) : (
                            "OK"
                        )}
                    </Container>
                </>
            )}
        </Box>
    );
};

export default ListMenu;
