import { Link } from 'react-router-dom'
import Card from "../components/shared/Card"

const AboutPage = () => {
    return (
        <Card>
            <h1>About This Project</h1>
            <p>This is a about page</p>
            <p>Version: 1.0.0</p>
            <Link to='/'>Back To Home</Link>
        </Card>
    )
}

export default AboutPage
