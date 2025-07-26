


import React from 'react';

const AdmitKardBlog = () => {
  return (
    <div className="bg-blog-bg">
      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-7 pt-9">
        <nav className="flex items-center space-x-3 text-blog-text-light text-base">
          <span className="hover:text-blog-accent cursor-pointer transition-colors">
            Study Abroad
          </span>
          <span className="text-blog-text-light">›</span>
          <span className="text-blog-accent font-semibold">Blog</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-7 py-10 text-center">
        <h1 className="text-5xl font-extrabold text-blog-text mb-5">
          AdmitKard Blogs
        </h1>
        <p className="text-xl text-blog-text-light max-w-4xl mx-auto">
          Education Without Borders - Study Abroad for a Global Perspective.
        </p>
      </div>

      {/* Blog Post Card */}
      <div className="container mx-auto px-7 pb-14">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Blog Post Image */}
            <div className="h-72 bg-gradient-to-r from-blog-accent/10 to-blog-accent/5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Person using MacBook Pro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Blog Post Content */}
            <div className="p-10">
              <h2 className="text-3xl font-bold text-blog-text mb-4 leading-snug hover:text-blog-accent transition-colors cursor-pointer">
                Top 10 Highest Paying Jobs in the World in 2025
              </h2>

              {/* Author and Date */}
              <div className="flex items-center space-x-4 text-blog-text-light text-base">
                <span className="font-semibold text-blog-accent">Tawqeer Ali</span>
                <span className="w-1.5 h-1.5 bg-blog-text-light rounded-full"></span>
                <span>July 24, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitKardBlog;
