import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import CreateForm from "./components/CreateForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/edit/:id" element={<CreateForm />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
