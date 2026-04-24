import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import CustomCursor from "./component/CustomCursor";
import ErrorBoundary from "./component/ErrorBoundary";
import { Outlet } from "react-router-dom";

function Template() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default Template;
