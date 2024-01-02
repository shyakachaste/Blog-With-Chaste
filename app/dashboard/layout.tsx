import React, { ReactNode } from 'react'
import Navlinks from './components/Navlinks';

export default function layout({ children} : {children: ReactNode }) {

  return (
  
    <div className="space-y-5">

      <Navlinks />
      {children}

    </div>
  );
}
