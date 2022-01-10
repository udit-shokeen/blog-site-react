import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            <h1>This is the most owsome homepage you'll ever see!</h1>
            {isLoading && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
} 

export default Home;