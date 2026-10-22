import SkillBadge from '../components/SkillBadge'
import { skills } from '../data'

function SkillsPage() {
    return (
        <section className="card">
            <h2>My skills</h2>
            <ul className="skills-grid">
                {skills.map((skill) => (
                    <SkillBadge key={skill.id} skill={skill} />
                ))}
            </ul>
        </section>
    )
}

export default SkillsPage
