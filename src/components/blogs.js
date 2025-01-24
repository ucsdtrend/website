import React from "react";
import "../styles/Blogs.scss";
import img1 from "../static/blogs/img1.png";
import img2 from "../static/blogs/img2.png";
import img3 from "../static/blogs/img3.png";

class Blogs extends React.Component {

    render() {

        const blogs = [
            {
              title: "Rico Nasty and La Gabi take on UCSD at Muirstock, 3/9/2024",
              author: "By Merav Price",
              image: img1, // Replace with the actual image path
            },
            {
              title:
                "Horizon: Larry June and Thee Sacred Souls at Epstein Family Amphitheater, 2/16/2024 and 2/17/2024",
              author: "By Yalini Thillaikumar",
              image: img2, // Replace with the actual image path
            },
            {
              title: "There Are Butterflies Among Us",
              author: "By Gianina Fan",
              image: img3, // Replace with the actual image path
            },
        ];

        return (
            <div className="blog-container">
                <div className="header">
                    <p className="landing"> Check out our latest blogs </p>
                    <button className="linkage">
                        View all blogs
                    </button>
                </div>
                <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <div
                            className="image-container"
                            style={{ backgroundImage: `url(${blog.image})` }}
                        ></div>
                        <div className="blog-details">
                            <p className="blog-title">{blog.title}</p>
                            <p className="blog-author">{blog.author}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }

}

export default Blogs;