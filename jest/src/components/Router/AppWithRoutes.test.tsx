import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import { render, screen } from '@testing-library/react'
import { AppWithRoutes } from './AppWithRoutes'


jest.mock('./Home', () => ({
    Home: () => <div data-testid='HomeMock' />
}))

describe('App with routes test suite', () => {
    it('Should always load the navbar', () => {
        render(<AppWithRoutes />)
        const navbar = screen.getByTestId('NavBar')
        expect(navbar).toBeInTheDocument();
    })

    it('Should initially load the home component', () => {
        render(<AppWithRoutes />)
        const home = screen.getByTestId('HomeMock')
        expect(home).toBeInTheDocument();
    })
})