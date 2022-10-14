import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './Signin'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

export default {
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
       msw: {
        handlers: [
            rest.post('/sessions', (req, res, ctx) => {
                return res(ctx.json({
                    message: 'Login Realizado com sucesso!'
                }))
            })
        ]
       } 
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'vinicius.silva.sdp@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), '123456')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado com sucesso!')).toBeInTheDocument()
        })
        
    }
}
