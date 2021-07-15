import React from "react";
import "./blog.css"

const Blog = props => {
    return (

        <div class="blog">
            {props.blogs.map((blog, index) => {
                return (
                    <section class="container flex"  key={index}>

                        <div id="leftBlog">
                            <h4 class="titleBlog"> {blog.title} </h4>
                            <p class="subBlog"> {blog.sub}</p>
                            <span class="meta-info"> {blog.date} by {blog.userName} </span>
                        </div>

                        <div id="rightBlog">
                            <img src={blog.img} alt="blog img" class="imgBlog"/>
                        </div>

                    </section>
                )
            })}
        </div>
    );

}

export default Blog