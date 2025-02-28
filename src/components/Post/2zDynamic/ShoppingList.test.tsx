import { render, screen, within } from "@testing-library/react"
import { ShoppingList } from "./ShoppingList"
import userEvent from "@testing-library/user-event"

describe('Shopping list test suite', () => {
    const ingredients = ['milk', 'onions', 'ham']
    const someFunction = () => { }
    it('should render ingredients', () => {
        render(<ShoppingList
            groceries={ingredients}
            selectItem={someFunction}
        />)

        const shoppingList = screen.getByRole('list')
        expect(shoppingList).toBeInTheDocument();
        const ingredientItems = within(shoppingList).getAllByRole('listitem');
        expect(ingredientItems).toHaveLength(3)
    })

    it('should select ingredients', async () => {
        const selectItemMock = vi.fn()
        render(<ShoppingList
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

    it('Throw error on list duplicates', ()=>{
        const groceriesWithDuplicates = ['Onions', 'Ham', 'Ham']
        expect(()=>{
            render(<ShoppingList
                groceries={groceriesWithDuplicates}
                selectItem={someFunction}
            />)            
        }).toThrowError('Duplicate items found in groceries array')
    })

    it('Throw error on list duplicates - generic messages', ()=>{
        const groceriesWithDuplicates = ['Onions', 'Ham', 'Ham']
        expect(()=>{
            render(<ShoppingList
                groceries={groceriesWithDuplicates}
                selectItem={someFunction}
            />)            
        }).toThrowError(/Duplicate/)
    })
})