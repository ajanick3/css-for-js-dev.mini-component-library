import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  if (!style) throw new Error('got no style');

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': style.iconSize + 'px' }}>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{
          '--height': style.height + 'px',
          '--width': width + 'px',
          '--fontSize': style.fontSize + 'px',
          '--borderThickness': style.borderThickness + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};
  transition: color ease-in-out 200ms;

  &:hover,
  &:focus {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
