import { Container } from "./style";

interface SideBarProps {
  isSideBarOpen: boolean;
}

export function SideBar({ isSideBarOpen }:SideBarProps) {
  return (
    <>
      <Container isSideBarOpen={isSideBarOpen}>
        <ul>
          <li>
            <a href="">Em alta</a> 
          </li>
          <li>
            <a href="">Promoções</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Perguntas Frequentes</a>
          </li>
        </ul>
      </Container>
    </>
  )
}