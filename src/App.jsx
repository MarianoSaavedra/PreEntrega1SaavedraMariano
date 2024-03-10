import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return(
    <>
      <NavBar />
      <ItemListContainer greeting="Saludando usando props"/>
    </>
  )
}

export default App
