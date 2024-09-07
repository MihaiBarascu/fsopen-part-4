const _ = require("lodash");

const dummy = (blogs) => {
  if (Array.isArray(blogs)) return 1;
  return 0;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, curr) => acc + curr.likes, 0);
};

const favoriteBlog = (blogs) => {
  const result = blogs.reduce(
    (max, current) => (current.likes > max.likes ? current : max),
    blogs[0]
  );

  return { title: result.title, author: result.author, likes: result.likes };
};

// const mostBlogs = (blogs) => {
//   const groupedList = _.groupBy(blogs, (blog) => blog.author);
//   const newArray = _.map(groupedList, (value, key) =>
//     value.reduce(
//       (acc) => {
//         return { ...acc, blogs: acc.blogs + 1 };
//       },
//       { author: key, blogs: 0 }
//     )
//   );

//   return newArray;
// };
const mostBlogs = (blogs) => {
  return _.maxBy(
    _.map(_.groupBy(blogs, "author"), (value, key) => ({
      author: key,
      blogs: _.size(value),
    })),
    "blogs"
  );
};

const mostLikes = (blogs) => {
  return _.maxBy(
    _.map(_.groupBy(blogs, "author"), (value, key) => ({
      author: key,
      likes: _.sumBy(value, "likes"),
    })),
    "likes"
  );
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
