import React, { useEffect } from "react";
import "../styles/HeartAnimation.css"; // Import your CSS file

function HeartAnimation() {
  useEffect(() => {
    const container = document.querySelector(".heart-container");
    const heart = document.querySelector(".heart");

    const createHeart = () => {
      const newHeart = document.createElement("div");
      newHeart.className = "heart";
      container.appendChild(newHeart);

      const x = Math.random() * window.innerWidth - 50;
      const y = Math.random() * window.innerHeight - 50;

      newHeart.style.left = `${x}px`;
      newHeart.style.top = `${y}px`;

      setTimeout(() => {
        newHeart.remove();
      }, 4000);
    };

    const handleMouseMove = (e) => {
      const x = e.clientX - container.offsetLeft - 25;
      const y = e.clientY - container.offsetTop - 25;
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
    };

    const handleMouseClick = () => {
      createHeart();
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleMouseClick);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className='heart-container'>
      <div className='heart'></div>
    </div>
  );
}

export default HeartAnimation;
