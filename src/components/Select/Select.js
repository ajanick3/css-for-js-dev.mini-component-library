import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        {displayedValue} <Icon id='chevron-down' size={18} strokeWidth={2} />
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const Presentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  font-size: ${16 / 16}rem;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: color ease-in 200ms;
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  ${NativeSelect}:focus + & {
    outline: 5px auto ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
