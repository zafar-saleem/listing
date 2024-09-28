'use client';

import MainProvider from '@/contexts/global';

const Providers = (props) => {
  return (
    <MainProvider>
      {props.children}
    </MainProvider>
  );
};

export default Providers;
