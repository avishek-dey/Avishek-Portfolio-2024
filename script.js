// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('dotGrid');
    const ctx = canvas.getContext('2d');

    // Set canvas size to match window size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Draw the dot grid
    function drawDotGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#80808040'; // Dot color and opacity

        const dotSize = 2;
        const spacing = 13;

        for (let x = spacing; x < canvas.width; x += spacing) {
            for (let y = spacing; y < canvas.height; y += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    // Initial setup
    setCanvasSize();
    drawDotGrid();

    // Redraw on window resize
    window.addEventListener('resize', function() {
        setCanvasSize();
        drawDotGrid();
    });
});

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// Check for saved theme preference or use system preference
const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
// Apply the theme
if (theme === 'dark') {
    document.documentElement.classList.add('dark');
}

// Toggle theme function
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
}

// Update icon based on current theme
function updateIcon() {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (document.documentElement.classList.contains('dark')) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

// Add click event to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Initial icon update
updateIcon();



// Function to make an icon drift randomly back and forth smoothly
function driftIcon(icon) {
    let x = 0;
    let y = 0;

    // Generate initial random direction and speed for each icon
    let directionX = (Math.random() - 0.5) * 2; // Random direction for X (-1 to 1)
    let directionY = (Math.random() - 0.5) * 2; // Random direction for Y (-1 to 1)
    let speedX = Math.random() * 0.1 + 0.01;  // Very slow random speed for X (0.01 to 0.06)
    let speedY = Math.random() * 0.08 + 0.01;  // Very slow random speed for Y (0.01 to 0.06)

    function drift() {
        // Update position based on direction and speed
        x += directionX * speedX;
        y += directionY * speedY;

        // Apply smooth transform to move the icon
        icon.style.transform = `translate(${x}px, ${y}px)`;

        // Gradually reverse the direction when it reaches a certain range to create back-and-forth effect
        if (Math.abs(x) > 50 || Math.abs(y) > 50) {
            directionX = -directionX; // Reverse horizontal direction
            directionY = -directionY; // Reverse vertical direction
        }

        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(drift);
    }

    drift(); // Start drifting
}

// // Apply the drifting effect to each icon, with each moving independently
document.querySelectorAll('.icon-drift').forEach(icon => {
    driftIcon(icon);
});



gsap.from(".image-div", { 
    y: -210,
    ease: "power2.in",
    scrollTrigger: {
        trigger: ".image-div",
        start: "top 80%", 
        end: "20px 30%", 
        scrub: true,
    }
    

});

gsap.from(".services", { 
    opacity:0,
    y: 210,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".services",
        start: "top 100%", 
        end: "20px 80%", 
        // markers: true
    }
    

});

gsap.from(".card", { 
    opacity:0,
    y: 210,
    stagger: 0.1,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#experience",
        start: "top 80%", 
        end: "20px 40%", 
        // scrub: true,
        // markers: true,
    }
    

});

gsap.from(".project", { 
    opacity:0,
    y: 210,
    stagger: 0.1,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%", 
        end: "20px 20%", 
        // scrub: true,
        // markers: true,
    }
    

});

gsap.from(".tab", { 
    opacity:0,
    y: 210,
    stagger: 0.1,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#freebies",
        start: "top 80%", 
        end: "20px 20%", 
        // scrub: true,
        // markers: true,
    }
    
});


// gsap.from("#bg", { 
//     opacity:0,
//     y: 210,
//     stagger: 0.1,
//     duration: 1,
//     ease: "power2.in",
//     scrollTrigger: {
//         trigger: "#bg",
//         start: "top 80%", 
//         end: "20px 60%", 
//         scrub: true,
//         // markers: true,
//     }
    

// });



let loadingNumber = 1;
const maxNumber = 100;
const loadingElement = document.getElementById('loading-number');

const interval = setInterval(() => {
  loadingElement.innerText = loadingNumber;

  if (loadingNumber >= maxNumber) {
    clearInterval(interval);
    document.body.classList.add('loaded');
  }

  loadingNumber += Math.floor(Math.random() * 10) + 1;
  loadingNumber = loadingNumber > maxNumber ? maxNumber : loadingNumber;
}, 100);

window.addEventListener('load', () => {
  setTimeout(() => {
    clearInterval(interval);
    document.body.classList.add('loaded');
  }, 10000); // Optional timeout to ensure the site reveals even if not fully loaded
});


gsap.to("#loader", { 
    y: -2100,
    delay: 1,
    duration: 2,
    }

);




