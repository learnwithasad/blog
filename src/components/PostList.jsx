import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../redux/postsSilce";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      {posts.length < 1 ? (
        <h1>No Post Found</h1>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {post.content.slice(0, 120)}...
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {post.date}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              <Link to={`/edit/${post.id}`}>
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => dispatch(deletePost(post.id))}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-xl shadow-sm hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
              <Link to={`/post/${post.id}`}>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-700 bg-teal-100 rounded-xl shadow-sm hover:bg-teal-200 transition-colors">
                  Read more <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
