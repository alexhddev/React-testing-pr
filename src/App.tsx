import { ShoppingList } from "./components/Post/2zDynamic/ShopingList"

function App() {

  function handleSelectItem(item: string){
    console.log(item)
  } 

  return (
    <>     
      <ShoppingList
        groceries={['Eggs', 'Milk', 'Paper']}
        selectItem={handleSelectItem}
      />
    </>
  )
}

export default App
