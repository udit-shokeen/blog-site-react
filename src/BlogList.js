import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const BlogList = ({blogs}) => {
    const history = useHistory();

    const handleDelete = (id)=>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        })
        .then(()=>{
            history.push('/');
        });
    };

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} style={{textDecoration: 'none'}}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;