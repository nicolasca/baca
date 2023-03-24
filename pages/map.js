import React, { useRef, useEffect, Suspense } from 'react';
import dynamic from "next/dynamic"
import Layout from '../components/layout';

const LeafletMap = dynamic(() => import("../components/leafletMap"), { ssr:false })

const Map = () => {
  return (
    <Layout>
            <LeafletMap />
    </Layout>
  );
};

export default Map;
