// withFooter.tsx
import React from 'react';
import Footer from './(home)/components/Footer';

const withFooter = (Component:any) => {
  return (props:any) => (
    <>
      <Component {...props} />
      <Footer />
    </>
  );
};

export default withFooter;