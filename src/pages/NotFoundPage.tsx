import { Link } from 'react-router'
import Card from '../components/ui/Card'

function NotFoundPage() {
    return (
        <Card>
            <h1>404 — Page not found</h1>
            <p>This page does not exist.</p>
            <Link to="/">Back to Home</Link>
        </Card>
    )
}

export default NotFoundPage
