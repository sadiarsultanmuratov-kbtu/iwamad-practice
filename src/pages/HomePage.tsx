import ProfileCard from '../components/ProfileCard'
import { skills } from '../data'

function HomePage() {
    return (
        <ProfileCard
            name="Sultanmuratov Shadiyar"
            role="IT Management Student"
            bio="Third-year IT Management student at KBTU. Learning to build web and mobile applications."
            avatarUrl={`${import.meta.env.BASE_URL}shadiyar.jpg`}
            email="sadiarsultanmuratov@gmail.com"
            github="https://github.com/sadiarsultanmuratov-kbtu"
            skills={skills}
        />
    )
}

export default HomePage
