import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft, FaRegClock } from "react-icons/fa";
import { useSelector } from "react-redux";

const PostDetails = () => {
  const { id } = useParams();

  const findPosts = useSelector((state) =>
    state.posts.posts.find((p) => p.id == id)
  );

  if (!findPosts) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-10 max-w-md w-full">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Post not found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The post you’re looking for doesn’t exist or was removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-indigo-700 bg-teal-100 rounded-xl shadow-sm hover:bg-teal-200 transition-all"
          >
            <FaLongArrowAltLeft className="text-indigo-600" />
            Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <article className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 sm:p-10 relative overflow-hidden">
        {/* decorative gradients */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-x-16 -translate-y-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-2xl translate-x-12 translate-y-12 pointer-events-none" />

        {/* post content */}
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
            {findPosts.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <FaRegClock className="text-indigo-500" />
            <span>Published on {findPosts.date}</span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[1.05rem] mb-8">
            {findPosts.content}
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-indigo-700 bg-teal-100 rounded-xl shadow-md hover:bg-teal-200 hover:shadow-lg transition-all duration-300 group"
          >
            <FaLongArrowAltLeft className="text-indigo-600 transform transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PostDetails;
