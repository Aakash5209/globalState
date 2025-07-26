import React from "react";
import Header from "../components/home_page/Header";
import TopCategories from "../components/blog_page/TopCategories";
import FeatureCards from "../components/home_page/FeatureCards";
import Contributors from "../components/blog_page/Contributors";
import FeaturedPosts from "../components/blog_page/FeaturedPosts";
import Footer from "../components/home_page/Footer";
import LatestStories from "../components/blog_page/LatestStories";
import LatestArticles from "../components/blog_page/LatestArticles";
import CartBlog from "../components/blog_page/CartBlog";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CartBlog />
      <LatestArticles />
      <LatestStories />
      <TopCategories />

      <FeatureCards />
      <FeaturedPosts />
      <Contributors />
      <Footer />
    </div>
  );
};

export default BlogPage;
