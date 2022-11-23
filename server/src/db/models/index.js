import Post from "./Post";
import Author from "./Author";

Author.hasMany(Post);
Post.belongsTo(Author);

export { Post, Author };
