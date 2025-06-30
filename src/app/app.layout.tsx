import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import { ToastContainer } from "react-toastify";

const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
