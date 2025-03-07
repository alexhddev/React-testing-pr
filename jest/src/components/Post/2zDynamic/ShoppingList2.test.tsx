import { render, screen, within } from "@testing-library/react"
import { ShoppingList2 } from "./ShoppingList2"
import userEvent from "@testing-library/user-event"

describe('Shopping list test suite', () => {
    const ingredients = ['milk', 'onions', 'ham']
    const someFunction = () => { }
    const someFunctionWrapper = {
        someFunction
    }
    const someFunctionSpy = jest.spyOn(someFunctionWrapper, "someFunction")
    it('should render ingredients', () => {
        render(<ShoppingList2
            groceries={ingredients}
            selectItem={someFunction}
        />)

        const shoppingList = screen.getByRole('list')
        expect(shoppingList).toBeInTheDocument();
        const ingredientItems = within(shoppingList).getAllByRole('listitem');
        expect(ingredientItems).toHaveLength(3)
    })

    it('should select ingredients', async () => {
        const selectItemMock = jest.fn()
        render(<ShoppingList2
            groceries={ingredients}
            selectItem={selectItemMock}
        />)
        const user = userEvent.setup();

        const shoppingList = screen.getByRole('list')
        expect(shoppingList).toBeInTheDocument();
        const ingredientItems = within(shoppingList).getAllByRole('listitem');
        expect(ingredientItems).toHaveLength(3)
        const milkIngredient = ingredientItems[0];
        await user.click(milkIngredient)
        expect(selectItemMock).toHaveBeenCalledWith(ingredients[0])
    })

    it('Show error message on list duplicates', ()=>{
        const groceriesWithDuplicates = ['Onions', 'Ham', 'Ham']
            render(<ShoppingList2
                groceries={groceriesWithDuplicates}
                selectItem={someFunction}
            />) 
            const errorMessage = screen.getByRole('paragraph')  
            expect(errorMessage).toHaveTextContent(/duplicate/)      
    })
})