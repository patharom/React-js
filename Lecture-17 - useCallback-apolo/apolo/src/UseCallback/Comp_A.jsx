
import React from 'react'
import { memo } from 'react';

const Comp_A = ({profile}) => {
    console.log('Componenet A Called');
  return (
    <div>
      
    </div>
  )
}

export default memo(Comp_A)
