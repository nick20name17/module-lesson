import { instance } from "./api";

export const getPosts = () => {
    instance.get("posts/1").then((response) => console.log(response.data));
};

export const addPost = ({ title, body, userId }) => {
    instance.post("posts", {
        title,
        body,
        userId,
    });
};

export const deletePost = (postId) => {
    instance.delete(`posts/${postId}`);
};
