import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import { render, screen } from '@testing-library/react'
import { AppWithRoutes } from './AppWithRoutes'
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event'



vi.mock('./Home', () => ({
    Home: () => <div data-testid='HomeMock' />
}))

vi.mock('./About', () => ({
    About: () => <div data-testid='AboutMock' />
}))

vi.mock('./Posts', () => ({
    Posts: () => <div data-testid='PostsMock' />
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

    it.skip('Should load routes - about route', () => {

        render(
            // won't work, Router inside a router
            <MemoryRouter initialEntries={['/about']}>
                <AppWithRoutes />
            </MemoryRouter>)
    })

    describe('Navbar navigation tests', () => {
        // mock request in order to test
        global["Request"] = vi.fn().mockImplementation(() => ({
            signal: {
                removeEventListener: () => { },
                addEventListener: () => { },
            },
        }));
        
        it('show home component on home click', async () => {
            render(<AppWithRoutes />)
            const user = userEvent.setup()
            const homeButton = screen.getByText('Home');

            await user.click(homeButton);

            const home = screen.getByTestId('HomeMock')
            expect(home).toBeInTheDocument();
        })

        it('show about component on about click', async () => {
            render(<AppWithRoutes />)
            const user = userEvent.setup()
            const aboutButton = screen.getByText('About');

            await user.click(aboutButton);

            const home = screen.getByTestId('AboutMock')
            expect(home).toBeInTheDocument();
        })
    })
})