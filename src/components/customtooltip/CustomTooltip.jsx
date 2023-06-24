import * as React from 'react'

//uses material ui tooltip! to download it: 
//            npm install @mui/material @emotion/react @emotion/style
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = styled(({ size = 1.5, className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ size }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FFFFFF',
    color: '#071013',
    width: '100%',
    fontSize: `${size * 0.5}rem`,
    textAlign: 'center',
    border: '1px solid #E7E7E7',
    borderRadius: '24px',
    padding: '0.5rem 1rem',
  },
}));

export default CustomTooltip
