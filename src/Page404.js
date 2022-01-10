import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you are looking for is not present</p>
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}
 
export default Page404;