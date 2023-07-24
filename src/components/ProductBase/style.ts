import { styled } from "styled-components";

export const SlideBase = styled.div`
    width: 100%;
    max-width: 900px;
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
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-around;
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
        span + span {
          margin-left: 0.5rem;
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
            color: ${(props) => props.theme.Dark["font-color"]};
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