(function() {

    Particles.init({
      selector: '.dh-background',
      color: '#75A5B7',
      
      maxParticles: 200,
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 180
          }
        }, {
          breakpoint: 375,
          options: {
            maxParticles: 150
          }
        }
      ]
    });
  
    var particlesWidth = window.innerWidth;
    if(particlesWidth < 2000)
      particlesWidth = 2000;
    var drhashh = new NextParticle({
      image: document.querySelector(".dh-particles img.particle1"),
      renderer: "webgl",
      ptlGap: 2,
      ptlSize: 1,
      width: 1000,
      height: 800,
      initPosition: 'none',
      initDirection: 'none',
      lifeCycle: true,
      growDuration: 20,
      waitDuration: 100,
      shrinkDuration: 50,
      responsiveWidth: true,
    });  

    console.log("Welcome!");
  
    window.addEventListener("resize", function(event) {
      
    });
  })();
  