import axios from "axios";

export const fetchPostData = async () => {
  try {
    const response = axios.get("https://jsonplaceholder.typicode.com/posts");
    return (await response).data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const deletePost = async (id: number) => {
  try {
    const response = axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return (await response).data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const addPost = async (newPost: {
  userId: number;
  title: string;
  body: string;
}) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

export const editPost = async (
  postId: number,
  updatedPost: {
    userId: number;
    title: string;
    body: string;
  }
) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updatedPost
    );
    return response.data;
  } catch (error) {
    console.error("Error editing post:", error);
    throw error;
  }
};

export const searchPosts = async (query: string) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const allPosts = response.data;

    const filteredPosts = allPosts.filter(
      (post: { id: number; title: string; body: string }) =>
        post.id.toString() === query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
    );

    return filteredPosts;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
