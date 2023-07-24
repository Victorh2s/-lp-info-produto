import styled from 'styled-components';

interface ContainerProps{
  background: boolean;
}

export const Container = styled.div<ContainerProps>`
margin: 0 auto;
padding: 0;
width: 100%;
min-height: 80vh;
background: ${props => props.background ? props.theme.Dark['background-page'] : props.theme.Light['background-page']};
color: ${props => props.background ? props.theme.Light['background-page'] : props.theme.Dark['background-page']};


`; 