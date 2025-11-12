import React from "react";
import { FaPlusCircle, FaInbox } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../redux/postsSilce";


const PostList = () => {
  const posts = useSelector((state) => state.posts?.posts ?? []);
  const dispatch = useDispatch()

  return (
    <>
      {posts.length < 1 ? (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="relative w-full max-w-xl">
            {/* Decorative floating blobs */}
            <div className="absolute -left-8 -top-8 w-28 h-28 bg-indigo-100/70 dark:bg-indigo-900/30 rounded-full filter blur-3xl animate-[float_6s_ease-in-out_infinite] pointer-events-none" />
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-100/60 dark:bg-teal-900/20 rounded-full filter blur-2xl animate-[float_8s_ease-in-out_infinite] pointer-events-none" />

            <div className="relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl p-8 text-center overflow-hidden transform transition duration-400 animate-fadeIn">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-full p-5 shadow-inner">
                    <FaInbox className="text-indigo-600 dark:text-indigo-300 w-10 h-10" />
                  </div>

                  {/* small pulsing dot near icon */}
                  <span className="absolute -right-2 -top-2 inline-block w-3 h-3 bg-indigo-500 rounded-full shadow-lg animate-pulse" />
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  No posts yet
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                  Looks like you don't have any posts yet. Create your first
                  post to share updates, stories, or news with your readers.
                </p>

                <div className="mt-3">
                  <Link to="/create" className="inline-flex">
                    <button
                      type="button"
                      className="group relative inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white rounded-2xl shadow-2xl bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-400 transform transition duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                      {/* animated icon */}
                      <span className="relative">
                        <FaPlusCircle className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
                        {/* tiny floating sparkle */}
                        <span className="absolute -right-2 -top-2 w-2 h-2 bg-white/80 rounded-full opacity-70 animate-ping" />
                      </span>

                      <span className="leading-none">Create Post</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id ?? index}
              className="bg-white dark:bg-slate-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {String(post.content).slice(0, 120)}...
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
                  // keep delete logic as you had it (unmodified here)
                  onClick={() => dispatch(deletePost(post.id))}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-xl shadow-sm hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>

                <Link to={`/post/${post.id}`}>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-700 bg-teal-100 rounded-xl shadow-sm hover:bg-teal-200 transition-colors">
                    Read more <FaPlusCircle className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
