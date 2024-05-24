import { Button, ButtonGroup, Box, Heading, Text,Grid } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faTruck, faHouseLaptop, faTruckLoading } from '@fortawesome/free-solid-svg-icons';

const Container = () => {
    return (
        <Box className="container">
            <Heading as="h1" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} textAlign="center">We Cover Everything<br />Logistics</Heading>
            <Grid  templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={4} justifyContent="center">
                <Box className="Box1" p="4" textAlign="center">
                    <FontAwesomeIcon icon={faBoxOpen} className="light-icon" />
                    <Heading as="h2" size="md">Parcel Delivery</Heading>
                    <Text>
                        Le soleil se couchait lentement derrière les collines,<br></br>
                        peignant le ciel d'une palette de couleurs chaudes.
                    </Text>
                </Box>
                <Box className="Box2" p="4" textAlign="center">
                    <FontAwesomeIcon icon={faTruck} className="light-icon" />
                    <Heading as="h2" size="md">Truck Delivery</Heading>
                    <Text>
                        Le soleil se couchait lentement derrière les collines,<br></br>
                        peignant le ciel d'une palette de couleurs chaudes.
                    </Text>
                </Box>
                <Box className="Box3" p="4" textAlign="center">
                    <FontAwesomeIcon icon={faHouseLaptop} className="light-icon" />
                    <Heading as="h2" size="md">Office Relocation</Heading>
                    <Text>
                        Le soleil se couchait lentement derrière les collines,<br></br>
                        peignant le ciel d'une palette de couleurs chaudes.
                    </Text>
                </Box>
                <Box className="Box4" p="4" textAlign="center">
                    <FontAwesomeIcon icon={faTruckLoading} className="light-icon" />
                    <Heading as="h2" size="md">International Delivery</Heading>
                    <Text>
                        Le soleil se couchait lentement derrière les collines,<br></br>
                        peignant le ciel d'une palette de couleurs chaudes.
                    </Text>
                </Box>
            </Grid>
        </Box>
    )
}

export default Container;
