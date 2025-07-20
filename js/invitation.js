
            function createFloatingHearts() {
                const heartsContainer = document.getElementById("hearts");

                function addHeart() {
                    const heart = document.createElement("div");
                    heart.className = "heart";
                    heart.innerHTML = Math.random() > 0.5 ? "💕" : "💖";
                    heart.style.left = Math.random() * 100 + "%";
                    heart.style.animationDuration = Math.random() * 3 + 5 + "s";
                    heart.style.animationDelay = Math.random() * 2 + "s";
                    heartsContainer.appendChild(heart);

                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.remove();
                        }
                    }, 8000);
                }

           
                setInterval(addHeart, 800);

              
                for (let i = 0; i < 5; i++) {
                    setTimeout(addHeart, i * 200);
                }
            }

    
            function createRoseEffect() {
                const container = document.querySelector(".movie-frame");
                for (let i = 0; i < 12; i++) {
                    const rose = document.createElement("div");
                    rose.innerHTML = "🌹";
                    rose.style.position = "absolute";
                    rose.style.left = Math.random() * 100 + "%";
                    rose.style.top = Math.random() * 100 + "%";
                    rose.style.fontSize = "1.5rem";
                    rose.style.animation = "fadeOut 2s ease-out forwards";
                    rose.style.pointerEvents = "none";
                    rose.style.zIndex = "1000";
                    container.appendChild(rose);

                    setTimeout(() => rose.remove(), 2000);
                }
            }

       
            function createRoseShower() {
                const container = document.body;
                for (let i = 0; i < 20; i++) {
                    const rose = document.createElement("div");
                    rose.innerHTML = "🌹";
                    rose.style.position = "fixed";
                    rose.style.left = Math.random() * window.innerWidth + "px";
                    rose.style.top = -50 + "px";
                    rose.style.fontSize = "2rem";
                    rose.style.animation = `fall ${
                        Math.random() * 2 + 3
                    }s linear forwards`;
                    rose.style.pointerEvents = "none";
                    rose.style.zIndex = "1000";
                    container.appendChild(rose);

                    setTimeout(() => rose.remove(), 5000);
                }
            }

            function createSparkleEffect() {
                const container = document.body;
                for (let i = 0; i < 15; i++) {
                    const sparkle = document.createElement("div");
                    sparkle.innerHTML = Math.random() > 0.5 ? "✨" : "💫";
                    sparkle.style.position = "fixed";
                    sparkle.style.left =
                        Math.random() * window.innerWidth + "px";
                    sparkle.style.top =
                        Math.random() * window.innerHeight + "px";
                    sparkle.style.fontSize = "1.5rem";
                    sparkle.style.animation = "sparkle 2s ease-out forwards";
                    sparkle.style.pointerEvents = "none";
                    sparkle.style.zIndex = "1000";
                    container.appendChild(sparkle);

                    setTimeout(() => sparkle.remove(), 2000);
                }
            }

            function createMoonlight() {
                const invitation = document.querySelector(
                    ".invitation-container"
                );
                const overlay = document.createElement("div");
                overlay.style.position = "absolute";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.background =
                    "radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)";
                overlay.style.pointerEvents = "none";
                overlay.style.borderRadius = "30px";
                overlay.style.opacity = "0";
                overlay.style.transition = "opacity 1s ease";
                invitation.appendChild(overlay);

                setTimeout(() => (overlay.style.opacity = "1"), 100);
                setTimeout(() => overlay.remove(), 3000);
            }

            function createStarfall() {
                const container = document.body;
                for (let i = 0; i < 12; i++) {
                    const star = document.createElement("div");
                    star.innerHTML = "⭐";
                    star.style.position = "fixed";
                    star.style.right = -50 + "px";
                    star.style.top =
                        Math.random() * window.innerHeight * 0.5 + "px";
                    star.style.fontSize = "1.5rem";
                    star.style.animation = `starfall ${
                        Math.random() * 1 + 2
                    }s linear forwards`;
                    star.style.pointerEvents = "none";
                    star.style.zIndex = "1000";
                    container.appendChild(star);

                    setTimeout(() => star.remove(), 3000);
                }
            }

          
            function acceptRomanticDate() {
                const message = document.createElement("div");
                message.innerHTML =
                    "💕 My heart is so happy! This will be the most wonderful evening together! 💕";
                message.style.position = "fixed";
                message.style.top = "50%";
                message.style.left = "50%";
                message.style.transform = "translate(-50%, -50%)";
                message.style.background =
                    "linear-gradient(45deg, #d63384, #dc3545)";
                message.style.color = "white";
                message.style.padding = "25px 45px";
                message.style.borderRadius = "30px";
                message.style.fontSize = "1.3rem";
                message.style.fontWeight = "500";
                message.style.zIndex = "10000";
                message.style.boxShadow = "0 25px 60px rgba(214, 51, 132, 0.4)";
                message.style.animation = "gentleFloat 2s ease-in-out infinite";
                message.style.textAlign = "center";
                message.style.fontFamily = "Georgia, serif";
                document.body.appendChild(message);

                // Add heart explosion
                createRoseShower();

                setTimeout(() => message.remove(), 4000);
            }

            function planTogether() {
                const options = `Perfect! Let's make this evening absolutely magical together! ✨

🎬 Movie showtime preferences

🍿 Favorite movie snacks

I want everything to be just right for our special date! 💕`;

                alert(options);
            }

            
            const style = document.createElement("style");
            style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
                100% { opacity: 0; transform: translateY(-30px) scale(0.7) rotate(180deg); }
            }
            
            @keyframes fall {
                0% { transform: translateY(-50px) rotate(0deg); }
                100% { transform: translateY(100vh) rotate(360deg); }
            }
            
            @keyframes sparkle {
                0% { opacity: 1; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
                100% { opacity: 0; transform: scale(0.5) rotate(360deg); }
            }
            
            @keyframes starfall {
                0% { transform: translateX(0) translateY(0) rotate(0deg); }
                100% { transform: translateX(-100vw) translateY(50px) rotate(360deg); }
            }
        `;
            document.head.appendChild(style);

     
            createFloatingHearts();