import heirloom from '../../assets/img/heirloom.jpg'
import whiteboard from '../../assets/img/whiteboard.jpg'


export interface WorldPoint {
    lat: number;
    lng: number;
    size: number,
    radius: number;
    color: string;
    label: string;
    address: string;
    quote: string;
    imageUrl: string;
    link: string;
  }

// Satellite constants
export const satConstants = {

  EARTH_RADIUS_KM: 6371, // km
  SAT_SIZE: 500, // km
  TIME_STEP: 3 * 1000, // ms
  orbitalData: [["0 OCO 2",
  "1 40059U 14035A   22053.53300804  .00000210  00000-0  56684-4 0  9992",
  "2 40059  98.1914 356.5765 0001423  84.7384 275.3977 14.57114578406590"],
  ["0 ISS (ZARYA)",
  "1 25544U 98067A   22053.88147859  .00006978  00000-0  13056-3 0  9990",
  "2 25544  51.6413 182.6542 0005405 155.4563 353.8725 15.49902234327456]"]]
}

export const WorldPoints: WorldPoint[] = [
    {
      lat: 37.68647394925242,
      lng: -122.4004216360767,
      size: 0.4,
      radius: 0.45,
      color: 'rgba(122, 194, 194, .5)',
      label: 'Heirloom',
      link: 'https://www.heirloomcarbon.com/',
      address: '125 Valley Dr, Brisbane, CA 94005',
      quote: "We're building a more resilient and equitable future",
      imageUrl: heirloom
    },
     {
      lat: 47.41300573,
      lng: 8.536149198798027,
      size: 0.4,
      radius: 0.45,
      color: 'rgba(122, 194, 194, .5)',
      label: 'Climeworks',
      link: 'https://climeworks.com/',
      address: 'Birchstrasse 155 8050 Zürich, Switzerland',
      quote: "Our mission is clear: to protect our planet",
      imageUrl: whiteboard
    },
    {
      lat: 49.28385396,
      lng: -123.1170906,
      size: 0.4,
      radius: 0.45,
      color: 'rgba(122, 194, 194, .5)',
      label: 'Carbon Engineering',
      link: 'https://carbonengineering.com/',
      address: '609 Granville St, Vancouver, BC V7Y 1G6, Canada',
      quote: "We believe humanity can solve climate change",
      imageUrl: whiteboard
    },
    {
      lat: 44.71620703,
      lng: -63.58210793,
      size: 0.4,
      radius: 0.45,
      color: 'rgba(122, 194, 194, .5)',
      label: 'Carbon Cure',
      link: 'https://www.carboncure.com/',
      address: '42 Payzant Ave, Dartmouth, Nova Scotia, B3B 1Z6, Canada',
      quote: "Concrete That Matters",
      imageUrl: whiteboard
    },
    {
      lat: 32.68731869040021,
      lng: -117.18996812883569,
      size: 0.5,
      radius: 0.45,
      color: 'rgba(122, 194, 194, .5)',
      label: 'Atmowaste',
      link: 'https://atmowaste.com',
      address: '421 Ocean Blvd, Coronado, CA, 92118',
      quote: "We are working together to reduce global air pollution and plastic waste",
      imageUrl: whiteboard
    }    
  ];
