import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='italic text-sm'> {post.author}</span>{" "}
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} >
            <span className='underline font-bold text-sm '>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm mb-5'> Posted on {post.date} </p>
      <p className='text-md'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-600 mr-0.5 pr-1'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
