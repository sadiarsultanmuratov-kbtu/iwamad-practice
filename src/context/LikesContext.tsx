import { createContext, useContext, useState, type ReactNode } from 'react'

type LikesContextValue = { likes: number; addLike: () => void }

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
    const [likes, setLikes] = useState(0)
    const addLike = () => setLikes((n) => n + 1)

    return <LikesContext value={{ likes, addLike }}>{children}</LikesContext>
}

export function useLikes() {
    const value = useContext(LikesContext)
    if (!value) throw new Error('useLikes must be used inside <LikesProvider>')
    return value
}
