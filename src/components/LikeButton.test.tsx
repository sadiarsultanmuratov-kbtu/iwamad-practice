import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

it('counts every click', async () => {
    // Arrange
    render(<LikesProvider><LikeButton /></LikesProvider>)
    const button = screen.getByRole('button')

    // Act
    await userEvent.click(button)
    await userEvent.click(button)

    // Assert
    expect(button).toHaveTextContent('♥ 2')
})
