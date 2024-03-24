import Contato from "./components/Contato"
import Header from "./components/Header"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"
import { GlobalCss } from "./styled"

function App() {
  return (
  <>
  <GlobalCss />
  <div className="container">
        <Header />
        <Projetos />
        <Sobre />
        <Contato />
      </div>
  </>
  )
}

export default App
