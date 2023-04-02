import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';


const customStyles = {
  content: {
  },
};
Modal.setAppElement('#root');
Modal.defaultStyles = {}
function App() {
  const HomePage = lazy(() => import("./pages/Homepage"))

  return (

    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
