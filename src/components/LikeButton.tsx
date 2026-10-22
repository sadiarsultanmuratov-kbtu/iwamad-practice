import { useLikes } from '../context/LikesContext'

function LikeButton() {
    const { likes, addLike } = useLikes()

    return (
        <button type="button" className="like-btn" onClick={addLike}>
            ♥ {likes}
        </button>
    )
}

export default LikeButton
