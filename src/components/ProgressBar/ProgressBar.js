import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) throw new Error('missing styles');

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--height': styles.height + 'px',
            '--width': value + '%',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: var(--height);
  width: var(--width);
`;

// export const NativeProgressBar = ({ value, size }) => {
//   const calcValue = value / 100;
//   return (
//     <progress value={calcValue} indeterminate={value != null}>
//       <VisuallyHidden>{value}%</VisuallyHidden>
//       {value}
//     </progress>
//   );
// };

export default ProgressBar;
