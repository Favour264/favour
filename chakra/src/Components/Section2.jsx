import { Flex, Box, Button, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import Bike from '../Images/bikky.jpg';

const Section2 = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            bg="#020231"
            maxWidth="62.5em"
            color="white"
            height={{ base: "auto", md: "520px" }} 
            borderRadius="20px"
            alignItems="center"
            justifyContent="center"
            p={{ base: "20px", md: "0" }}
            ml={{ base: "0", md: "160px" }} 
        >
            <Box
                display="flex"
                flexDirection={isMobile ? "column" : "row"} // Change direction based on mobile/desktop view
                alignItems="flex-start"
                textAlign="left"
                p={{ base: "20px", md: "40px" }} 
                mb={{ base: "20px", md: "0" }} // Add margin bottom for mobile view
                mr={{ base: "0", md: "40px" }} // Add margin right for desktop view
            > 
                <Box flex="1">
                    <Heading as="h2" size="xl" mb={{ base: "20px", md: "40px" }}>
                        Are you a small logistics<br /> company?
                    </Heading>
                    <Text fontSize="xl" mb={{ base: "20px", md: "40px" }}>
                        Paystack helps businesses in Africa get <br /> paid by anyone, anywhere in the world
                    </Text>
                    <Button colorScheme="blue" size="sm" borderRadius="20px">Become a Vendor</Button>
                </Box>
                <Box ml={{ base: "0", md: isMobile ? "0" : "100px" }} p="10px" w="300px" >
                    <Image src={Bike} alt="Dan Abramov" borderRadius="30px" filter="brightness(130%)" />
                </Box>
            </Box>
        </Flex>
    );
}

export default Section2;
