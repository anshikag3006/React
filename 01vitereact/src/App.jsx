import Chai from "./chai"

function App() {
  const username = 'chai aur code'

  return (
    <>
      <Chai />
      <h2>chai aur react {username}</h2>
      {/* in this {} only evaluated expression are written */}
      <p>test</p>
    </>
  )
}

export default App
