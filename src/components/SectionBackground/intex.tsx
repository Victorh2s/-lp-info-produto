import { SectionContainer } from "../SectionContainer";
import { Container } from "./style";
import { ReactNode } from "react";


interface SectionBackgroundProps {
  children: ReactNode;
  background?: boolean;
  sectionId?: string;
}

export function  SectionBackground({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) {
  return (
    <Container  id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
}