import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        const mouse = {
            x: null,
            y: null,
            radius: 120,
        };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        const robotArea = {
            x: canvas.width * 0.72,
            y: canvas.height * 0.15,
            width: 450,
            height: 650,
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.size = Math.random() * 2 + 1;

                this.speedX = (Math.random() - 0.5) * 0.6;
                this.speedY = (Math.random() - 0.5) * 0.6;
            }


            draw() {

                // Don't draw particles on the avatar
                if (
                    this.x > robotArea.x &&
                    this.x < robotArea.x + robotArea.width &&
                    this.y > robotArea.y &&
                    this.y < robotArea.y + robotArea.height
                ) {
                    return;
                }

                ctx.beginPath();

                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                ctx.fillStyle = "#00ffcc";

                ctx.shadowBlur = 20;

                ctx.shadowColor = "#00ffcc";

                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width)
                    this.speedX *= -1;

                if (this.y < 0 || this.y > canvas.height)
                    this.speedY *= -1;

                if (mouse.x !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        this.x -= dx * 0.01;
                        this.y -= dy * 0.01;
                    }
                }

                this.draw();
            }
        }

        function createParticles() {
            particles = [];

            const count = Math.floor(canvas.width / 10);

            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        createParticles();

        function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {

            // Skip lines inside robot area
            const insideA =
                particles[a].x > robotArea.x &&
                particles[a].x < robotArea.x + robotArea.width &&
                particles[a].y > robotArea.y &&
                particles[a].y < robotArea.y + robotArea.height;

            const insideB =
                particles[b].x > robotArea.x &&
                particles[b].x < robotArea.x + robotArea.width &&
                particles[b].y > robotArea.y &&
                particles[b].y < robotArea.y + robotArea.height;

            if (insideA || insideB) continue;

            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                ctx.strokeStyle = `rgba(0,255,204,${1 - distance / 120})`;

                ctx.lineWidth = 0.5;

                ctx.beginPath();

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();
            }
        }
    }
}

        let animationId;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => p.update());

            connectParticles();

            animationId =
                requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationId);

            window.removeEventListener(
                "resize",
                resizeCanvas
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}