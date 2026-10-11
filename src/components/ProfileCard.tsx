import Card from './ui/Card'
import LikeButton from './LikeButton'
import SkillBadge, { type Skill } from './SkillBadge'

type ProfileCardProps = {
    name: string
    role: string
    bio: string
    avatarUrl?: string
    email: string
    github: string
    skills: Skill[]
}

function ProfileCard({ name, role, bio, avatarUrl, email, github, skills }: ProfileCardProps) {
    return (
        <Card>
            {avatarUrl && <img src={avatarUrl} alt={name} className="avatar" />}

            <h1 className="card-name">{name}</h1>
            <p className="card-role">{role}</p>
            <p>{bio}</p>

            <ul className="card-links">
                <li><a href={`mailto:${email}`}>Email</a></li>
                <li><a href={github}>GitHub</a></li>
            </ul>

            <LikeButton />

            <h2>Skills</h2>
            {skills.length === 0 ? (
                <p>No skills added yet.</p>
            ) : (
                <ul className="skills-grid">
                    {skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                    ))}
                </ul>
            )}
        </Card>
    )
}

export default ProfileCard
