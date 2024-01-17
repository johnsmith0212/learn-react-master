import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

const Post = () => {
    // const params = useParams()
    const navigate = useNavigate()
    const status = 200

    if(status === 404) {
        return <Navigate to='/notfound'/>
    }

    const onClick = () => {
        navigate('/about')
    }

    return (
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path='show' element={<h1>Hello World</h1>} />
            </Routes>
        </div>
    )
}

export default Post
