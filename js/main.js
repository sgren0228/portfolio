$(function () {
    $("body").prepend('<div id="tsparticles"></div>');
    $("#tsparticles").particles({
      "background": { "color": { "value": "#3498db" } }, // 青背景
      "particles": {
        "color": { "value": "#fff" }, // パーティクル白
        "number": { "value": 80 },
        "shape": { "type": "circle" },
        "size": { "value": 4 },
        "links": { "enable": true, "color": "#fff", "opacity": 0.4 },
        "move": { "enable": true, "speed": 2 }
      },
      "interactivity": {
        "events": {
          "onHover": { "enable": true, "mode": "repulse" },
          "onClick": { "enable": true, "mode": "push" }
        },
        "modes": { "repulse": { "distance": 120, "duration": 0.4 } }
      },
      "detectRetina": true
    });
  });