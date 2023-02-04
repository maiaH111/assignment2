const fs = require('fs');
const pathway = require('path');
const getAllPosts = async () => {
  return await readFile('posts.json');
};
const getAllCategories = async () => {
  return await readFile('categories.json');
};
const getPublishedPosts = async () => {
  const posts = await readFile('posts.json');
  return posts.filter(post => post.published === true);
};
