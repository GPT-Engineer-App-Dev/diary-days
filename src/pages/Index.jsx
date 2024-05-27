import { Box, Container, Flex, Heading, Text, VStack, Link, useColorMode, IconButton, Input, Textarea, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [posts, setPosts] = useState([
    { title: "First Blog Post", excerpt: "This is the summary of the first blog post." },
    { title: "Second Blog Post", excerpt: "This is the summary of the second blog post." },
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  useEffect(() => {
    const savedColorMode = localStorage.getItem("chakra-ui-color-mode");
    if (savedColorMode) {
      document.documentElement.setAttribute("data-theme", savedColorMode);
    }
  }, []);

  const handleToggleColorMode = () => {
    toggleColorMode();
    localStorage.setItem("chakra-ui-color-mode", colorMode === "light" ? "dark" : "light");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostData = { title: newPost.title, excerpt: newPost.content };
    setPosts([...posts, newPostData]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <Container maxW="container.xl" p={4} bg={colorMode === "light" ? "gray.50" : "gray.900"} color={colorMode === "light" ? "black" : "white"}>
      <Flex as="nav" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">My Blog</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={handleToggleColorMode}
        />
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} align="flex-start">
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8}>
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%" bg={colorMode === "light" ? "white" : "gray.700"}>
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.excerpt}</Text>
                <Link color="teal.500" mt={2} display="block">Read more...</Link>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={colorMode === "light" ? "white" : "gray.700"}>
            <Heading fontSize="lg" mb={4}>About Me</Heading>
            <Text>This is a brief description about me.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mt={8} bg={colorMode === "light" ? "white" : "gray.700"}>
            <Heading fontSize="lg" mb={4}>Links</Heading>
            <VStack spacing={2} align="flex-start">
              <Link href="#" color="teal.500">Link 1</Link>
              <Link href="#" color="teal.500">Link 2</Link>
              <Link href="#" color="teal.500">Link 3</Link>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <Box mt={8} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={colorMode === "light" ? "white" : "gray.700"}>
        <Heading as="h2" size="md" mb={4}>Add New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              required
            />
            <Textarea
              placeholder="Content"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              required
            />
            <Button type="submit" colorScheme="teal">Add Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;