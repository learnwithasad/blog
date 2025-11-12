import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-600">Blog</span>. All
          rights reserved.
        </p>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
