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
              url: "https://medium.com/@trenducsd/rico-nasty-and-la-gabi-take-on-ucsd-at-muirstock-2024-89c2f0788752"
            },
            {
              title:"Horizon: Larry June and Thee Sacred Souls at Epstein Family Amphitheater, 2/16/2024 and 2/17/2024",
              author: "By Yalini Thillaikumar",
              image: img2, // Replace with the actual image path
              url: "https://medium.com/@trenducsd/horizon-larry-june-and-thee-sacred-souls-at-epstein-family-amphitheater-2-16-2024-b92aad68c69e"
            },
            {
              title: "There Are Butterflies Among Us",
              author: "By Gianina Fan",
              image: img3, // Replace with the actual image path
              url: "https://medium.com/@trenducsd/there-are-butterflies-among-us-12feaaadd3be"
            },
        ];

        return (
            <div className="blog-container">
                <div className="header">
                    <p className="landing"> Check out our latest blogs </p>
                    <button className="linkage" onClick={() => window.open('https://medium.com/@trenducsd', '_blank')}>
                            More blogs
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" class="arrow-icon">
                                <path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"/>
                            </svg>
                    </button>
                </div>
                <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <img
                            className="image-container"
                            src={blog.image}
                            alt={`Blog ${index}`}
                            onClick={() => window.open(blog.url, '_blank')} 
                            style={{ cursor: 'pointer' }} 
                        ></img>
                        <div className="blog-details">
                            <p className="blog-title">{blog.title}
                            </p>
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