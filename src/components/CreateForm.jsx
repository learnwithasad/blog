import React, { useEffect, useState } from "react";
import { addPost, updatePost } from "../redux/postsSilce";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CreateForm = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findPost = useSelector((state) =>
    state.posts.posts.find((p) => p.id == id)
  );

  useEffect(() => {
    if (findPost) {
      setTitle(findPost.title);
      setContent(findPost.content);
    }
  }, [findPost]);

  const handleSubmit = (e) => {
    if (id) {
      const data = {
        id,
        title,
        content,
        date: new Date().toLocaleDateString(),
      };
      dispatch(updatePost(data));
    } else {
      const data = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleDateString(),
      };
      dispatch(addPost(data));
    }

    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          {id ? "Update Post" : "Create New Post"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Title Input */}
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          {/* Content Textarea */}
          <div className="flex flex-col">
            <label
              htmlFor="content"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post here..."
              rows={6}
              className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-start px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors"
          >
            {id ? "Update Post" : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
