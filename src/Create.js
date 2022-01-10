import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        setIsPending(true);
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false);
            // history.go(-1);  go to prev page
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a new blog.</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Body</label>
                <textarea
                    required
                    placeholder="Please write here..."
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                {isPending && <button disabled>Adding...</button>}
                {!isPending && <button>ADD</button>}
            </form>
        </div>
    );
}
 
export default Create;