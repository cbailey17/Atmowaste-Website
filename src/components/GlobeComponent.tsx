import React, { useEffect, useRef, useState, useMemo } from "react";
import Globe from 'react-globe.gl';
import { Mesh } from "three";
import * as satellite from 'satellite.js';
import { motion } from 'framer-motion';
import { WorldPoint, WorldPoints, satConstants } from "../assets/data/globe-data";
import { Tooltip } from ".";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


// Satellite data type
interface SatData {
    satrec: satellite.SatRec;
    name: string;
}

interface GlobeProps {
  tooltipRef: React.RefObject<HTMLDivElement>;
  tooltip: WorldPoint & { x: number; y: number } | null;
  setTooltip: (tooltip: WorldPoint & { x: number; y: number } | null) => void;
  time: Date;
  globeSize: number;
}

const GlobeComponent: React.FC<GlobeProps> = ({ tooltipRef, tooltip, setTooltip, globeSize, time }) => {
  const globeEl = useRef<any>(undefined);
  const [satelliteModel, setSatelliteModel] = useState<Mesh | null>(null);
  const [globeRadius, setGlobeRadius] = useState<number | null>(null);
  const [satData, setSatData] = useState<SatData[] | null>(null);

  useEffect(() => {
    const satData = satConstants.orbitalData.map(([name, ...tle]) => ({
      satrec: satellite.twoline2satrec(tle[0], tle[1]),
      name: name.trim().replace(/^0 /, '')
    }))
      .filter(d => !!satellite.propagate(d.satrec, new Date()).position);

    setSatData(satData);
  }, []);

  useEffect(() => {
    setGlobeRadius(globeEl.current.getGlobeRadius());
    globeEl.current.pointOfView({ altitude: 3.5 });

    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView({
          lat: 39.6,
          lng: -98.5,
          altitude: 2,
      })        
    }
  }, []);

  const satellitePositions = useMemo(() => {
    if (!satData) return [];

    const gmst = satellite.gstime(time);
    return satData.map(d => {
      const eci = satellite.propagate(d.satrec, time);
      if (eci.position && typeof eci.position !== 'boolean') {
        const gdPos = satellite.eciToGeodetic(eci.position, gmst);
        const lat = satellite.radiansToDegrees(gdPos.latitude);
        const lng = satellite.radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / satConstants.EARTH_RADIUS_KM;
        return { ...d, lat, lng, alt };
      }
      return d;
    });
  }, [satData, time]);

  const satObject = useMemo(() => {
    if (satelliteModel && globeRadius) {
      const mesh = satelliteModel.clone();
      mesh.scale.set(
        satConstants.SAT_SIZE * globeRadius / satConstants.EARTH_RADIUS_KM / 2,
        satConstants.SAT_SIZE * globeRadius / satConstants.EARTH_RADIUS_KM / 2,
        satConstants.SAT_SIZE * globeRadius / satConstants.EARTH_RADIUS_KM / 2
      );
      return mesh;
    }
  }, [satelliteModel, globeRadius]);

    useEffect(() => {
    if (globeRadius) {
      const loader = new GLTFLoader();
      loader.load(
        '/models/near_satellite.glb',
        (gltf) => {
          const mesh = gltf.scene.children[0] as Mesh;
          
          if (globeRadius){
            // Adjust the scale of the mesh here
            mesh.scale.set(satConstants.SAT_SIZE * globeRadius / satConstants.EARTH_RADIUS_KM / 2, satConstants.SAT_SIZE * globeRadius / satConstants.EARTH_RADIUS_KM / 2, satConstants.SAT_SIZE * globeRadius / satConstants.EARTH_RADIUS_KM / 2);
            setSatelliteModel(mesh);
          }
        },
        undefined,
        (error) => console.error('An error happened:', error)
      );
    }
    return () => {
      if (satelliteModel) {
        setSatelliteModel(null);
      }
    }
  }, [globeRadius]);

  useEffect(() => {
    const handleScroll = () => {
      console.log("------", window.scrollY);
      setSatelliteModel(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="canvas"
      className="mt-[5%] sm:mt-[5%]">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        waitForGlobeReady={true}
        backgroundColor="rgba(0,0,0,0)"
        width={globeSize}
        height={globeSize}
        animateIn={true}
        pointsData={WorldPoints}
        pointLabel="label"
        pointAltitude="size"
        pointRadius="radius"
        pointColor="color"
        pointLat="lat"
        pointLng="lng"
        objectsData={satellitePositions}
        objectLabel="name"
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectFacesSurfaces={false}
        objectThreeObject={satObject}
        onPointClick={(point: any, event) => {
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          const tooltipWidth = 400;
          const tooltipHeight = 200;
          let x = event.clientX;
          let y = event.clientY;
          if (x + tooltipWidth > viewportWidth) {
            x -= tooltipWidth;
          }
          if (y + tooltipHeight > viewportHeight) {
            y -= tooltipHeight;
          }
          setTooltip({
            ...point, 
            x: x,
            y: y
          });
        }}
      />
      {tooltip && <Tooltip tooltip={tooltip} tooltipRef={tooltipRef} />}
    </motion.div>    
  );
}

export default GlobeComponent;
