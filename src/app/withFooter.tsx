// withFooter.tsx
import React from 'react';
import Footer from './(home)/components/Footer';

const withFooter = (Component:any) => {
  const WithFooter = (props:any) => (
    <>
      <Component {...props} />
      <Footer />
    </>
  );

  WithFooter.displayName = `WithFooter(${getDisplayName(Component)})`;

  return WithFooter;
};

function getDisplayName(Component: React.ComponentType<any>) {
  return Component.displayName || Component.name || 'Component';
}
export default withFooter;