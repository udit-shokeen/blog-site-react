import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        })
        .then(()=>{
            history.push('/');
        });
    };

    return (
        <div className="blog-details">
            {isLoading && <h4>Loading...</h4>}
            {error && <h3>{error}</h3>}
            {blog && 
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written By: {blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;