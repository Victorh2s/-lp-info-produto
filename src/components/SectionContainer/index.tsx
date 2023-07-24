import { ReactNode } from "react";
import { Container } from "./style";

interface SectionContainerProps {
  children: ReactNode;
  background: boolean;
  link?: string;
}

export const SectionContainer = ({ children, background, link }:SectionContainerProps) => {
  return <Container background={background} id={link} >{children}</Container>;
};