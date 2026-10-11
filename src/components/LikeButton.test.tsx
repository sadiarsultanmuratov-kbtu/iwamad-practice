import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

it('counts every click', async () => {
    render(<LikesProvider><LikeButton /></LikesProvider>)          // Arrange
    const button = screen.getByRole('button')

    await userEvent.click(button)                                 // Act
    await userEvent.click(button)

    expect(button).toHaveTextContent('♥ 2')                       // Assert
})
