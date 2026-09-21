import { useState } from 'react';
import SkillBadge, { type Skill } from './SkillBadge';

type ProfileCardProps = {
    name: string;
    role: string;
    bio: string;
    avatarUrl?: string;
    email: string;
    github: string;
    skills: Skill[];
};

function ProfileCard({
    name,
    role,
    bio,
    avatarUrl,
    email,
    github,
    skills,
}: ProfileCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <section className="card">
            {avatarUrl && (
                <img src={avatarUrl} alt={name} className="avatar" />
            )}

            <div className="card-body">
                <h2 className="card-name">{name}</h2>
                <p className="card-role">{role}</p>
                <p className="card-bio">{bio}</p>

                <ul className="card-links">
                    <li><a href={`mailto:${email}`}>Email</a></li>
                    <li><a href={github}>GitHub</a></li>
                </ul>

                <button
                    className={`like-btn ${liked ? 'is-liked' : ''}`}
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? '💖 Liked!' : '❤️ Like'}
                </button>

                <div className="skills-section">
                    <h3>Skills</h3>
                    {skills.length === 0 ? (
                        <p className="empty">No skills added yet.</p>
                    ) : (
                        <ul className="skills-grid">
                            {skills.map((skill) => (
                                <SkillBadge key={skill.id} skill={skill} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProfileCard;