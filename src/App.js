import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThreeDots }  from "react-loader-spinner";
import Layout from './components/layout/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Courses = React.lazy(() => import('./pages/Courses'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<ThreeDots/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
