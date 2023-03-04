import space from "../assets/space.gif";
import player from "../assets/player.png";
import meteorImg from "../assets/meteor.png";
import sound from "../assets/music.mp3";
import spaceS from "../assets/space.mp3";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Canvas: React.FC = () => {
  const navigate = useNavigate();
  const audio = new Audio(sound);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shipPos, setShipPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight - 100,
  });
  const [isFiring, setIsFiring] = useState(false);
  const [fireballPos, setFireballPos] = useState({
    x: shipPos.x,
    y: shipPos.y,
  });
  const [meteors, setMeteors] = useState<
    { x: number; y: number; radius: number }[]
  >([]);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);

  const audio2 = new Audio(spaceS);
  audio2.loop = true;
  audio2.play();

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (!context) return;

    const drawShip = () => {
      const image = new Image();
      image.src = `${player}`;
      context.drawImage(image, shipPos.x, shipPos.y, 75, 100);
    };

    const drawFireball = () => {
      context.fillStyle = "orange";
      const fireWidth = 5;
      const fireHeight = 150;

      const fireX = shipPos.x + 32.5;
      const fireY = shipPos.y - 150;
      context.fillRect(fireX, fireY, fireWidth, fireHeight);
    };

    const drawMeteor = (meteor: { x: number; y: number; radius: number }) => {
      const image = new Image();
      image.src = `${meteorImg}`;
      context.drawImage(image, meteor.x, meteor.y, 75, 100);
    };

    const checkCollision = (meteor: {
      x: number;
      y: number;
      radius: number;
    }) => {
      const distance = Math.sqrt(
        Math.pow(meteor.x - shipPos.x, 2) + Math.pow(meteor.y - shipPos.y, 2)
      );
      if (distance <= meteor.radius + 20) {
        setHealth((health) => health - 10);
        if (health < 10) {
          //   console.log("gameover");
          navigate("/GameOver");
          window.location.reload();
        }
        return true;
      }
      return false;
    };

    const intervalId = setInterval(() => {
      const meteorRadius = Math.random() * 20 + 10;
      const meteorX =
        Math.random() * (canvasRef.current!.width - meteorRadius * 2) +
        meteorRadius;
      const meteorY = -meteorRadius;
      setMeteors((meteors) => [
        ...meteors,
        { x: meteorX, y: meteorY, radius: meteorRadius },
      ]);

      // drawFireball();
    }, 1000 / 10);

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      drawShip();
      if (isFiring) {
        // setFireballPos((pos) => ({ shipPos.x, shipPos.y - 10 }));

        drawFireball();
      }
      meteors.forEach((meteor, index) => {
        meteor.y += 40;
        drawMeteor(meteor);
        if (checkCollision(meteor)) {
          setMeteors((meteors) => meteors.filter((m, i) => i !== index));
        } else if (isFiring) {
          const distance = Math.sqrt(
            Math.pow(meteor.x - fireballPos.x, 2) +
              Math.pow(meteor.y - fireballPos.y, 2)
          );
          if (distance <= meteor.radius + 30) {
            setMeteors((meteors) => meteors.filter((m, i) => i !== index));
            setScore((score) => score + 10);
            // audio3.play();
          }
        }
      });
    };

    const animationId = requestAnimationFrame(function animate() {
      render();
      //   animationIdRef.current = requestAnimationFrame(animate);
    });

    return () => {
      //   cancelAnimationFrame(animationIdRef.current);
      clearInterval(intervalId);
    };
  }, [meteors]);
  //   const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  //     if (event.code === "ArrowLeft") {
  //       setShipPos((pos) => ({ ...pos, x: pos.x - 10 }));
  //     } else if (event.code === "ArrowRight") {
  //       setShipPos((pos) => ({ ...pos, x: pos.x + 10 }));
  //     } else if (event.code === "ArrowUp") {
  //       setShipPos((pos) => ({ ...pos, y: pos.y - 10 }));
  //     } else if (event.code === "ArrowDown") {
  //       setShipPos((pos) => ({ ...pos, y: pos.y + 10 }));
  //     } else if (event.code === "Space") {
  //       setIsFiring(true);
  //       setFireballPos({ x: shipPos.x, y: shipPos.y - 20 });
  //     }
  //   };
  //   const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
  //     if (event.code === "Space") {
  //       setIsFiring(false);
  //       setFireballPos({ x: shipPos.x, y: shipPos.y });
  //     }
  //   };
  useEffect(() => {
    let intervalId: any;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          setShipPos((pos) => ({ ...pos, x: pos.x - 10 }));
          break;
        case "ArrowRight":
          setShipPos((pos) => ({ ...pos, x: pos.x + 10 }));
          break;
        case "ArrowUp":
          setShipPos((pos) => ({ ...pos, y: pos.y - 10 }));
          break;
        case "ArrowDown":
          setShipPos((pos) => ({ ...pos, y: pos.y + 10 }));
          break;
        case " ":
          setIsFiring(true);
          intervalId = setInterval(() => {
            setFireballPos((pos) => ({ x: shipPos.x + 32.5, y: pos.y - 10 }));
          }, 100);
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === " ") {
        setIsFiring(false);
        clearInterval(intervalId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      clearInterval(intervalId);
    };
  }, [shipPos, isFiring]);

  return (
    <div tabIndex={0} style={{ overflow: "hidden", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "yellow",
          fontWeight: "800",
          width: "98vw",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <p style={{ position: "absolute", zIndex: "100", left: 10 }}>
          Score: {score}
        </p>
        <p style={{ position: "absolute", zIndex: "100", right: 10 }}>
          Health: {health}
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          backgroundImage: `url(${space})`,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      />
    </div>
  );
};
export default Canvas;
