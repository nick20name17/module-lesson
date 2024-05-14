// import sum, { user as customUser } from "./js/math";

// const res = sum(1, 3);
// console.log(res);
// console.log(customUser);

import { getPosts, addPost, deletePost } from "./api/posts";

getPosts();

addPost({
    body: "Test",
    title: "Test Title",
    userId: 32,
});

deletePost(2);
