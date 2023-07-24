import { styled } from "styled-components";
import img from '../../assets/background_1.png'




interface MenuProps {
  menuIsOpen?: boolean;
  isHasBackgroundMenu: boolean;
}

export const Nav = styled.nav<MenuProps>`
  position: fixed;
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.isHasBackgroundMenu ? props.theme.Dark["background-page"] : "transparent"};
  transition: all 0.3s ease-in-out;
  z-index: 5;
  div{
    display:flex;
    justify-content:space-between;
    align-items: center;
    max-width: 1444px;
    margin: 0 auto;

   
    ul {
      display:flex;
      justify-content:space-around;

      li {
        list-style: none;
        svg{
          color: ${(props) => props.theme.Light['button']}
        }
        a{
          text-decoration: none;
          color: ${(props) => props.theme.Dark['font-color']};
          transition: all 0.3s ease-in-out;

          &:hover{
            color: ${(props) => props.theme.Light['font-hover']};
          }
        }
      }
    }

    ul:first-child{
      flex: 0.1;
    }

    ul:last-child{
      flex: 0.5;
    }
    
  }
`


export const NavMenu = styled.nav<MenuProps>`
  position: fixed;
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.isHasBackgroundMenu ? props.theme.Dark["background-page"] : "transparent"};
  transition: all 0.3s ease-in-out;
  z-index: 5;


  div{
    display:flex;
    justify-content:space-between;
    align-items: center;
    max-width: 1444px;
    margin: 0 auto;

   
    ul {
      display:flex;
      justify-content:space-around;

      li {
        list-style: none;
        svg{
          color: ${(props) => props.theme.Dark['font-color']};
        }
        a{
          text-decoration: none;
          color: ${(props) => props.theme.Dark['font-color']};
        }
      }
    }

    svg{
          color: ${(props) => props.menuIsOpen ?  props.theme.Light['button'] : props.theme.Dark['font-color']};
          cursor: pointer;
    }

    ul:first-child{
      flex: 0.1;
    }

    ul:last-child{
      flex: 0.5;
    }
    
  }
`



export const Header = styled.header`
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 45%,
    rgba(0, 0, 0, 0.3) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  }

  
  h2{
    padding: 2rem;
    text-align: center;    
    width: 100%;
    max-width: 720px;
    color: #ffff;
    strong {
      color: ${(props) => props.theme.Light['button']};
    }
  }
`

export const Section_1 = styled.div`

  h1{
    text-align: center;
    margin-top: 5rem;
    color: ${(props) => props.theme.Light["button"]};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.5rem;
    }

  }

  main{
    width: 100%;
    max-width: 1000px;
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height:80vh;

    img{
      width: 250px;
      @media (max-width: 700px){
        width: 180px;
      }
    }

  /* img, div {
    border: 1px solid black;
  } */
  
    div {
      flex:1;
      min-height: 40vh;

      @media (max-width: 700px){
        p{
          font-size: 14px;
        }
       
      }

      h2 {
        color: ${(props) => props.theme.Dark["font-color"]};
      }

      span {
        font-style: italic;
        font-weight: bold;
        color: ${(props) => props.theme.Light["gray-2"]};
        margin-top: 1.5rem;
        display: block;
        @media (max-width: 700px){
          margin-top: 1rem;
        }
      }

      p {
        margin-top: 1.5rem;
        font-weight: bold;
        
        @media (max-width: 700px){
          margin-top: 1rem;
        }
      }

      section {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        @media (max-width: 700px){
          margin-top: 1rem;
        }

        span + button {
          margin-left: 3rem;
        }
        span {
          display: block;
          margin: 0;
          color: ${(props) => props.theme.Light["green"]}
        }

        button {
          padding: 0.3rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: ${(props) => props.theme.Light["button"]};
          border: 1px solid transparent;
          border-radius: 0.5rem;
          transition: all 0.2s ease-in-out;
          svg {
            color: ${(props) => props.theme.Light["font-color"]};
          }

          &:hover{
            background: transparent;
            svg {
              color: ${(props) => props.theme.Light["button"]};
            }
            border: 1px solid ${(props) => props.theme.Light["button"]};
          }
        }

      }
    }

    img + div {
      margin-left: 3rem;
    }
  }

 

 
`

export const Section_2 = styled.div`
  h1{
    text-align: center;
    margin-top: 5rem;
    color: ${(props) => props.theme.Light["button"]};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.5rem;
    }
  }
 
`

export const SlideBase = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height:80vh;
    text-align: start;
    img{
      width: 250px;
      @media (max-width: 700px){
        width: 180px;
      }
    }

  /* img, div {
    border: 1px solid black;
  } */
  
    div {
      flex:1;
      min-height: 40vh;

      @media (max-width: 700px){
        p{
          font-size: 14px;
        }
       
      }

      h2 {
        color: ${(props) => props.theme.Dark["font-color"]};
      }

      span {
        font-style: italic;
        font-weight: bold;
        color: ${(props) => props.theme.Light["gray-2"]};
        margin-top: 1.5rem;
        display: block;
        @media (max-width: 700px){
          margin-top: 1rem;
        }
      }

      p {
        margin-top: 1.5rem;
        font-weight: bold;
        
        @media (max-width: 700px){
          margin-top: 1rem;
        }
      }

      section {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        @media (max-width: 700px){
          margin-top: 1rem;
        }

        span + button {
          margin-left: 3rem;
        }
        span {
          display: block;
          margin: 0;
          color: ${(props) => props.theme.Light["green"]}
        }

        button {
          padding: 0.3rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: ${(props) => props.theme.Light["button"]};
          border: 1px solid transparent;
          border-radius: 0.5rem;
          transition: all 0.2s ease-in-out;
          svg {
            color: ${(props) => props.theme.Light["font-color"]};
          }

          &:hover{
            background: transparent;
            svg {
              color: ${(props) => props.theme.Light["button"]};
            }
            border: 1px solid ${(props) => props.theme.Light["button"]};
          }
        }

      }
    }

    img + div {
      margin-left: 3rem;
    }

`

export const SectionAbout = styled.div`
 max-width: 1440px;
 align-items: center;
 padding: 10rem 4rem;
 margin: 0 auto;
 margin-top: 15rem;
 .about{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .a-title{
    h1,h4{
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 15vh;
      width: 40rem;

    }
    h4{
      width: 25rem;
      border-bottom: 1px dashed ${props => props.theme.Light['gray-2']};
    }

       @media (max-width: 1110px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1,h4{
          flex: 1;
          text-align: center;
        }
        h4{
          margin-top: 1rem;
        }
      
       
      }

  }

  .a-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 5rem;
    margin-top: 5rem;

    .a-grid-column{
      border:1px solid ${props => props.theme.Light['gray-2']};;
      height: 60vh;
      padding: 1.5rem;
      border-radius: 1rem;

      svg{
      color: ${props => props.theme.Light['button']};
      margin-bottom: 2rem;
      }
    }
  }
    
`

export const SectionResponse = styled.div`
  max-width: 1440px;
  align-items: center;
  padding: 10rem 4rem;
  margin: 0 auto;

  ul {
    margin-top: 5rem;
    li + li {
      margin-top: 2rem;
    }

    li {
      p{
        margin-left: 1rem;
      }
    }
  }
    
`

export const Payment = styled.div`
  align-items: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  

    div:first-child{
      background: ${props => props.theme.Dark['background-page']};
      width: 100%;
      height: 1vh;
    }

    div{
      margin-top: 5rem;
      width: 100%;
      h1{
        color: ${props => props.theme.Dark['font-color']};
        text-align: center;
        padding: 2rem;
      }

    }

    .method-payment{
      width: 80%;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

    }

    
`
export const Footer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4:first-child{
  margin-top: 10rem;
  }

  h4 + h4 {
    margin-top: 2rem;
  }

  h4 {
    span {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 80%;
      margin: 0 auto;
      margin-top: 1rem;



    }
  }

  p {
    margin-top: 4rem;
  }
  


    
`

