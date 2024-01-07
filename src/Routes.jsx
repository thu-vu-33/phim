import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Shikoyatlarcatigoriyasi = React.lazy(
  () => import("pages/Shikoyatlarcatigoriyasi"),
);
const Fullwidth = React.lazy(() => import("pages/Fullwidth"));
const Contact = React.lazy(() => import("pages/Contact"));
const Kinohaqidavakinokorishsaxifasi = React.lazy(
  () => import("pages/Kinohaqidavakinokorishsaxifasi"),
);
const Companents = React.lazy(() => import("pages/Companents"));
const PluginfilecoverTwo = React.lazy(() => import("pages/PluginfilecoverTwo"));
const Mainpage = React.lazy(() => import("pages/Mainpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pluginfilecovertwo" element={<PluginfilecoverTwo />} />
          <Route path="/companents" element={<Companents />} />
          <Route
            path="/kinohaqidavakinokorishsaxifasi"
            element={<Kinohaqidavakinokorishsaxifasi />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fullwidth" element={<Fullwidth />} />
          <Route
            path="/shikoyatlarcatigoriyasi"
            element={<Shikoyatlarcatigoriyasi />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
