import {describe, it, expect} from 'vitest'
import { render, screen } from '@testing-library/react'
import {ErrorMessage} from './ErrorMessage'
// import '@testing-library/jest-dom' // add "types": ["vitest/globals", "@testing-library/jest-dom"] to tsconfig.app.json to prevent this



describe('ErrorMessage test suite', ()=>{
    it('Renders default error state', ()=>{
        render(<ErrorMessage message='An error occurred'/>)
        // screen.debug() this will print the component
        const expectedMessage = 'An error occurred'
        expect(screen.getByTestId('message-container')).toHaveTextContent(expectedMessage)
    })
})