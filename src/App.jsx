import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import Contact from "./pages/Contact";
import PlaceDetail from "./components/Places/PlaceDetail";
import PlaceDetailHunza from "./components/Places/placeDetailHunza";
import FairyMedows from "./components/Places/fairyMedows";
import Autumn from "./components/Places/Autumn";
import Lake from "./components/Places/lake";
import Nalter from "./components/Places/nalter";
import TrekkingTours from "./components/Places/TrekkingTours";
import ScrollToTop from "../ScrollToTop";
import K2BaseCampDetail from "./components/Places/K2BaseCampDetail";
import FairyMeadowsDetail from "./components/Places/FairyMeadowsDetail";
import RakaposhiBaseCampDetail from "./components/Places/RakaposhiBaseCampDetail";
import BikeTours from "./components/Places/BikeTours";
import BikeDetailPage from "./components/Places/BikeDetailPage";
import KarakoramHighwayDetail from "./components/Places/KarakoramHighwayDetail";
import KhunjerabPassDetail from "./components/Places/KhunjerabPassDetail";

// import BikeDetailPage from './components/BikeDetailPage';

// import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      {/*  Must be inside BrowserRouter */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetails />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="/TrekkingTours" element={<TrekkingTours />} />
          <Route path="/bike-tours" element={<BikeTours />} />
          <Route path="place-detail/:title" element={<PlaceDetail />} />
          <Route
            path="/placeDetailHunza/:title"
            element={<PlaceDetailHunza />}
          />
          <Route path="/fairyMedowsDetail/:title" element={<FairyMedows />} />
          <Route path="/autumnDetail/:title" element={<Autumn />} />
          <Route path="/lakeDetail/:title" element={<Lake />} />
          <Route path="/nalterDetail/:title" element={<Nalter />} />
          <Route
            path="/trekkingDetail/k2-base-camp"
            element={<K2BaseCampDetail />}
          />
          <Route
            path="/trekkingDetail/fairy-meadows"
            element={<FairyMeadowsDetail />}
          />
          <Route
            path="/trekkingDetail/rakaposhi-base-camp"
            element={<RakaposhiBaseCampDetail />}
          />
          <Route path="/bikeDetail/:title" element={<BikeDetailPage />} />

          <Route
            path="/bikeDetail/:title"
            element={<KarakoramHighwayDetail />}
          />
          <Route
            path="/bikeDetail/title"
            element={<KhunjerabPassDetail />}
          />

          {/* <Route path="/bikeDetail/:title" element={<BikeDetailPage />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
