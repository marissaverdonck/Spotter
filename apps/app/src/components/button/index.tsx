import { Children, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface Props {
  onClick?: (e: any) => void | Promise<void>;
  children?: ReactNode;
}

const StyledButton = styled.button`
  background-color: #e05436;
  border: none;
  border-radius: 5px;
  width: 10rem;
  padding: 1rem;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

const StyledTransparentButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 auto;
`;

const ButtonLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: ${theme.sizes.fontSizeXS};
  color: ${theme.colors.textColorLight};
`;

export const Button = ({ onClick, children }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonLabel>{children}</ButtonLabel>
    </StyledButton>
  );
};

export const TransparentButton = ({ onClick, children }: Props) => {
  return (
    <StyledTransparentButton onClick={onClick}>
      {children}
    </StyledTransparentButton>
  );
};
