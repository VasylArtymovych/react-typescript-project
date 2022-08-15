import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Header';
import { CustomSpinner } from 'components/Loader';

const SharedLayout: FC = () => {
  return (
    <>
      <ToastContainer
        autoClose={1500}
        theme={'dark'}
        icon={true}
        pauseOnFocusLoss
      />
      <Header />
      <Suspense fallback={<CustomSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
