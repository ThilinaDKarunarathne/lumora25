import React, { useEffect } from 'react';
import './ParticleEffect.css';
import Stats from 'stats.js'; // Correct import for Stats.js
import 'particles.js'; // Make sure particles.js is properly imported

const ParticleEffect = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      "particles":{
    "number":{
      "value":400,
      "density":{
        "enable":true,
        "value_area":600}
    },
    "color":{
      "value":"#ffffff"  //partical color
    },
    "shape":{
      "type":"circle",
      "stroke":{
        "width":0,
        "color":"#000000"
      },
      "polygon":{
        "nb_sides":3
      },
      "image":{
      "src":"img/github.svg",
        "width":4700,
        "height":4700
      }
    },
    "opacity":{
      "value":0.8,
      "random":true,
      "anim":{
        "enable":false,
        "speed":0.3,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":5,
      "random":true,
      "anim":{
        "enable":true,
        "speed":10,
        "size_min":0,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
      "distance":500,
      "color":"#ffffff",
      "opacity":0.4,
      "width":2
    },
    "move":{
      "enable":true,
      "speed":5,
      "direction":"top",
      "random":true,
      "straight":false,
      "out_mode":"out",
      "bounce":false,
      "attract":{
        "enable":false,
        "rotateX":600,
        "rotateY":1200
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",     
    "events":{
      "onhover":{
        "enable":false,
        "mode":"bubble"
      },
      "onclick":{
        "enable":false,
        "mode":"repulse"
      },
      "resize":true
    },
    "modes":{
      "grab":{
        "distance":400,
        "line_linked":{
          "opacity":0.5
        }
      },
      "bubble":{
        "distance":400,
        "size":4,
        "duration":0.3,
        "opacity":1,
        "speed":3
      },
      "repulse":{
        "distance":200,
        "duration":0.4
      },
      "push":{
        "particles_nb":4
      },
      "remove":{
        "particles_nb":2
      }
    }
  },
  "retina_detect":true
    });

    const stats = new Stats(); // Correct instantiation of Stats
    stats.setMode(0); // Set mode to FPS
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    let count_particles;
    count_particles = document.querySelector('.js-count-particles');

    const update = function () {
      stats.begin();
      stats.end();

      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }

      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    // Cleanup function to remove stats when component unmounts
    return () => {
      document.body.removeChild(stats.domElement); // Clean up the stats element
    };
  }, []);

  return (
    <div id="particles-js">
      <div className="js-count-particles"></div>
    </div>
  );
};

export default ParticleEffect;