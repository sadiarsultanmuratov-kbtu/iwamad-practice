import Card from '../components/ui/Card'
import SkillBadge from '../components/SkillBadge'
import LikeButton from '../components/LikeButton'
import { skills } from '../data'

function SkillsPage() {
    return (
        <Card>
            <h1>Skills</h1>
            <ul className="skills-grid">
                {skills.map((skill) => (
                    <SkillBadge key={skill.id} skill={skill} />
                ))}
            </ul>
            <p>Liked my profile? The count stays the same on every page.</p>
            <LikeButton />
        </Card>
    )
}

export default SkillsPage
