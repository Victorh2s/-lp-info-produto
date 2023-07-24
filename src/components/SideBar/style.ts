import { styled } from "styled-components";

interface SideBarProps {
  isSideBarOpen: boolean;
}

export const Container = styled.nav<SideBarProps>`
    position: absolute;
    background: white;
    width: 40%;
    min-height: 25vh;
    transition: all 0.3s ease-in-out;
    right: ${(props) => props.isSideBarOpen ? "0%" : "-40%"};
    opacity: ${(props) => props.isSideBarOpen ? "100%" : "0%"};
    background: ${(props) => props.theme.Light["button"]};
    padding: 1.5rem 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;


    ul{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: start;
      min-height: 20vh;

      li + li {
        margin-top: 1rem;
      }

      li{
        list-style: none;
        width: 100%;
        border-bottom: 1px dashed  ${(props) => props.theme.Light["font-color"]};
        a{
          display: block;
          text-decoration: none;
          width: 100%;
          padding: 0.5rem 0rem;
          transition: all 0.2s ease-in-out;
          font-weight: bold;
          
          &:hover{
          color:${(props) => props.theme.Light["gray"]};
            
          }


          color:${(props) => props.theme.Light["font-color"]};
        }
      }
    }
`