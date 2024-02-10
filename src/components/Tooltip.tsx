import React from 'react';
import { WorldPoint } from '../assets/data/globe-data'; 

// Define the type for the tooltip object
interface TooltipProps {
  tooltip: {
    label: string;
    address: string;
    quote: string;
    link: string;
    imageUrl: string;
    x: number;
    y: number;
  };
  tooltipRef: React.RefObject<HTMLDivElement>;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltip, tooltipRef }) => {
  return (
    <div ref={tooltipRef} style={{color: 'white', position: 'absolute', top: tooltip.y, left: tooltip.x,  padding: '10px', border: '1px solid black', borderRadius: '15px', backgroundColor: '#2a2d3a', minWidth: '120px', maxWidth: '180px'}}>
        <h1 style={{color: 'white', padding: '4px', fontSize: '1.7em'}}>{tooltip.label}</h1>
        <p style={{fontSize: '12px', padding: '4px'}}>{tooltip.address}</p>
        <blockquote style={{fontStyle: 'italic', padding: '4px'}}>
            {tooltip.quote}
        </blockquote>
        <a style={{paddingLeft: '10px', marginTop: '17px', color: 'steelblue'}} href={tooltip.link}>Visit {tooltip.label}!</a>
        <img src={tooltip.imageUrl} style={{width: '100px', padding: '4px', marginTop: '5px'}} alt="Carbon Capture" />
    </div>
  );
}

export default Tooltip;
