
import { Suspense, useState } from 'react';
import './App.css'
import NavBar from './components/navbar/NavBar'
import type { ITechType } from './components/type/techType'
import Banner from './components/banner/Banner';
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const techDataFetch = async (): Promise<ITechType[]> => {
  const res = await fetch('./data.json');
  const data = await res.json();
  console.log("Fetch Promise Data: ", data);
  return data;
}

function App() {
  const [techDataPromise] = useState(() => techDataFetch());


  return (
    <>
      <div>
        <NavBar />
        <Banner />
        <Suspense fallback={<h2>Loading Tech Data...</h2>}>
          <Technologies techDataPromise={techDataPromise} />
        </Suspense>
        <Footer />
        <ToastContainer />

      </div>
    </>
  )
}

export default App
