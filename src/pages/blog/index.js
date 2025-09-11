import Blog from '../../components/blog/Blog'
import Head from 'next/head'
import React from 'react'

const blogPage = () => {
  return (
    <>
      <Head>
        <title>Blog App | Articles</title>
        <meta name="description" content="Welcome to the Articles of My Website. Explore our latest blog posts and updates." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Blog App" />
        <meta name="keywords" content="blog, homepage, next.js, articles" />
      </Head>
      <Blog />
    </>
  )
}

export default blogPage