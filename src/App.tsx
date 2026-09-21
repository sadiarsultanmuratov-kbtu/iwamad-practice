import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import { type Skill } from './components/SkillBadge';
import './App.css';

const skills: Skill[] = [
    { id: 1, label: 'English' },
    { id: 2, label: 'French' },
    { id: 3, label: 'Python' },
    { id: 4, label: 'SQL' },
    { id: 5, label: 'Power BI' },
    { id: 6, label: 'Figma' },
];

function App() {
    return (
        <>
            <Header
                name="Sultanmuratov Shadiyar"
                tagline="Aspiring Web Developer"
            />

            <main className="page-main">
                <ProfileCard
                    name="Sultanmuratov Shadiyar"
                    role="IT Management Student"
                    bio="Third-year IT Management student at KBTU. Learning to build web and mobile applications."
                    avatarUrl="/shadiyar.jpg"
                    email="sadiarsultanmuratov@gmail.com"
                    github="https://github.com/sadiarsultanmuratov-kbtu"
                    skills={skills}
                />
            </main>

            <Footer author="Sultanmuratov Shadiyar" year={2026} />
        </>
    );
}

export default App;