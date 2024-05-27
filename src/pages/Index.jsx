import { Box, Container, Flex, Heading, Text, VStack, Link, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [posts] = useState([
    { title: "First Blog Post", excerpt: "This is the summary of the first blog post." },
    { title: "Second Blog Post", excerpt: "This is the summary of the second blog post." },
  ]);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">My Blog</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} align="flex-start">
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8}>
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.excerpt}</Text>
                <Link color="teal.500" mt={2} display="block">Read more...</Link>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="lg" mb={4}>About Me</Heading>
            <Text>This is a brief description about me.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mt={8}>
            <Heading fontSize="lg" mb={4}>Links</Heading>
            <VStack spacing={2} align="flex-start">
              <Link href="#" color="teal.500">Link 1</Link>
              <Link href="#" color="teal.500">Link 2</Link>
              <Link href="#" color="teal.500">Link 3</Link>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;