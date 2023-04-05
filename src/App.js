import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import TravelProductPage from 'pages/TravelProductPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import BookingAddNew from 'modules/booking/BookingAddNew';


const customStyles = {
  content: {
  },
};
Modal.setAppElement('#root');
Modal.defaultStyles = {}
function App() {
  const HomePage = lazy(() => import("./pages/Homepage"))
  const TravelProductPage = lazy(() => import("./pages/TravelProductPage"))
  const SignUpPage = lazy(() => import("./pages/SignUpPage"))
  const SignInPage = lazy(() => import("./pages/SignInPage"))
  const TravelDetail = lazy(() => import("./pages/TravelDetail"))
  return (

    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/travels" element={<TravelProductPage></TravelProductPage>}></Route>
        <Route path="/travels/:slug" element={<TravelDetail></TravelDetail>}></Route>
        <Route path="/add-travel" element={<BookingAddNew></BookingAddNew>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
