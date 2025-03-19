import eyeofra from "../../assets/eyeofra.png";
import eyeofhorus from "../../assets/eyeofhorus.png";
import ankh from "../../assets/ankh.png";

import eyeofrabutton from "../../assets/eyeofrabutton.png";
import eyeofhorusbutton from "../../assets/eyeofhorusbutton.png";
import ankhbutton from "../../assets/ankhbutton.png";

import restrictedbutton from "../../assets/restrctedbutton.png";
import restricited from "../../assets/restricted.png";

const Data = [
  { 
    id: 1, 
    src: ankh, 
    btn:ankhbutton,
    alt: '2', 
    title: 'Ankh',
    subTitle: 'Symbol of creation and life',
    //description : "Hint Not Available Yet"
    description : "Check near the roundabout...."
  },
  { 
    id: 2, 
    src: eyeofhorus,
    btn:eyeofhorusbutton,
    alt: '3',
    title: 'Eye of horus',
    subTitle: 'Symbol of protection and sky',
    //description : "Make a phone call for a hint" 
    description : "If you are looking for horus's eye,\nLook far and beyond,\nTo the hawk soaring sky...."
  },
  { 
    id: 3, 
    src: eyeofra, 
    btn:eyeofrabutton,
    alt: '1', 
    title: 'Eye of Ra',
    subTitle: 'Symbol of kings and order',
    description : "Seek for the eye of great God ra,\nFulfill your destiny fulfill your task,\nThen you shall grant the new life's heart...."
  },
  /* { 
     id: 2, 
     src: restricited,
     btn: restrictedbutton,
     alt: 'no-access',
     title: 'No Access',
     subTitle: '?', 
     description : "After finding Relic One, you can access this hint..."
   },
   { 
     id: 3, 
     src: restricited, 
     btn: restrictedbutton,
     alt: 'no-access', 
     title: 'No Access',
     subTitle: "?",
     description : "After finding Relic two, you can access this hint..."
   },*/
];

export default Data;