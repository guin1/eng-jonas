import { Fundo, HeaderContainer, Links, LinksContainer} from "./styled";

function Header() {
    return (
        <Fundo>

        <HeaderContainer>
         <h1>Engenharia - Jonas</h1>
        {/* <img src="https://via.placeholder.com/200x100" alt="" /> */}
        <LinksContainer>
          <Links href="">Projetos</Links>
          <Links href="">Sobre nós</Links>
          <Links href="">Contato</Links>
        </LinksContainer>
      </HeaderContainer>
        </Fundo>
    );
  }

  export default Header
