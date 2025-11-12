import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PostDetails = () => {
  const post = {
    id: Date.now().toLocaleString(),
    title:
      "Today news is here: How are you? New post aa gai hy, check details below",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam optio impedit est quod a consequuntur autem odit tenetur voluptatem suscipit nesciunt dicta animi vitae mollitia, corporis corrupti praesentium. Voluptatum, ipsamas tempore animi voluptate quibusdam, praesentium cum sapiente id excepturi vitae a accusantium quis, tempora dicta quod nihil possimus. Eos nulla maxime sapiente. Porro, autem asperiores. Full content goes here for the detailed view of the post.",
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Published on {post.date}
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {post.content}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-indigo-700 bg-teal-100 rounded-xl shadow-sm hover:bg-teal-200 transition-colors"
        >
          <FaLongArrowAltLeft />
          Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
