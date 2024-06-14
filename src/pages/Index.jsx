import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Learn Video Editing</Heading>
        <Text fontSize="lg" textAlign="center">Master the art of video editing with our comprehensive tutorials and resources.</Text>
        <Box boxSize="sm">
          <Image src="/images/video-editing.jpg" alt="Video Editing" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" rightIcon={<FaPlayCircle />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;