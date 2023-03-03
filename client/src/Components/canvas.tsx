// import React, { useEffect, useRef, useState } from "react";

// const Canvas = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [shipPos, setShipPos] = useState({ x: 0, y: 0 });
//   const [isFiring, setIsFiring] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     let animationFrameId: number;

//     const render = () => {
//       if (ctx) {
//         // Clear the canvas
//         ctx.clearRect(0, 0, canvas!.width, canvas!.height);

//         // Draw the spaceship
//         ctx.fillStyle = "white";
//         const shipWidth = 20;
//         const shipHeight = 20;
//         const shipX = canvas!.width / 2 - shipWidth / 2 + shipPos.x;
//         const shipY = canvas!.height - shipHeight - 20 + shipPos.y;
//         ctx.fillRect(shipX, shipY, shipWidth, shipHeight);

//         // Draw the fire
//         if (isFiring) {
//           ctx.fillStyle = "orange";
//           const fireWidth = 5;
//           const fireHeight = 50;
//           const fireX = shipX + shipWidth / 2 - fireWidth / 2;
//           const fireY = shipY - fireHeight;
//           ctx.fillRect(fireX, fireY, fireWidth, fireHeight);
//         }
//       }

//       animationFrameId = window.requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [shipPos, isFiring]);

//   useEffect(() => {
//     let intervalId: number;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       switch (event.key) {
//         case "ArrowLeft":
//           setShipPos((pos) => ({ ...pos, x: pos.x - 10 }));
//           break;
//         case "ArrowRight":
//           setShipPos((pos) => ({ ...pos, x: pos.x + 10 }));
//           break;
//         case "ArrowUp":
//           setShipPos((pos) => ({ ...pos, y: pos.y - 10 }));
//           break;
//         case "ArrowDown":
//           setShipPos((pos) => ({ ...pos, y: pos.y + 10 }));
//           break;
//         case " ":
//           setIsFiring(true);
//           break;
//         default:
//           break;
//       }
//     };

//     const handleKeyUp = (event: KeyboardEvent) => {
//       if (event.key === " ") {
//         setIsFiring(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     if (isFiring) {
//       intervalId = window.setInterval(() => {
//         setShipPos((pos) => ({ ...pos, y: pos.y - 20 }));
//       }, 100);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//       window.clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         width: "100%",
//         height: "100%",

//       }}
//     />
//   );
// };

// export default Canvas;

// import React, { useEffect, useRef, useState } from "react";

// interface Meteor {
//   x: number;
//   y: number;
//   radius: number;
// }

// const Canvas = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [shipPos, setShipPos] = useState({ x: 0, y: 0 });
//   const [isFiring, setIsFiring] = useState(false);
//   const [meteors, setMeteors] = useState<Meteor[]>([]);
//   const [score, setScore] = useState(0);
//   const [health, setHealth] = useState(100);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     let animationFrameId: number;

//     const render = () => {
//       if (ctx) {
//         // Clear the canvas
//         ctx.clearRect(0, 0, canvas!.width, canvas!.height);

//         // Draw the spaceship
//         ctx.fillStyle = "white";
//         const shipWidth = 40;
//         const shipHeight = 40;
//         const shipX = canvas!.width / 2 - shipWidth / 2 + shipPos.x;
//         const shipY = canvas!.height - shipHeight - 20 + shipPos.y;
//         ctx.fillRect(shipX, shipY, shipWidth, shipHeight);

//         // Draw the fire
// if (isFiring) {
//   ctx.fillStyle = "orange";
//   const fireWidth = 10;
//   const fireHeight = 200;
//   const fireX = shipX + shipWidth / 2 - fireWidth / 2;
//   const fireY = shipY - fireHeight;
//   ctx.fillRect(fireX, fireY, fireWidth, fireHeight);
// }

//         // Draw the meteors
//         const mt = (ctx.fillStyle = "white");
//         // meteors.push(mt)
//         meteors.forEach((meteor) => {
//           const meteorX = meteor.x;
//           const meteorY = meteor.y;
//           const meteorRadius = meteor.radius;

//           ctx.beginPath();
//           ctx.arc(meteorX, meteorY, meteorRadius, 0, Math.PI * 2);
//           ctx.fill();

//           // Check for collision with spaceship
//           const dx = shipX + shipWidth / 2 - meteorX;
//           const dy = shipY + shipHeight / 2 - meteorY;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < meteorRadius + shipWidth / 2) {
//             setHealth((health) => health - 10);
//             setMeteors((meteors) => meteors.filter((m) => m !== meteor));
//           }

//           // Check for collision with fire
//           if (isFiring) {
//             const fireWidth = 10;
//             const fireHeight = 20;
//             const fireX = shipX + shipWidth / 2 - fireWidth / 2;
//             const fireY = shipY - fireHeight;
//             const fdx = fireX + fireWidth / 2 - meteorX;
//             const fdy = fireY - meteorY;
//             const fdistance = Math.sqrt(fdx * fdx + fdy * fdy);
//             if (fdistance < meteorRadius + fireWidth / 2) {
//               setScore((score) => score + 10);
//               setMeteors((meteors) => meteors.filter((m) => m !== meteor));
//             }
//           }
//         });
//       }

//       animationFrameId = window.requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [shipPos, isFiring, meteors]);

//   //   useEffect(() => {

//   //     let intervalId: number;

//   //     const dropMeteor = () => {
//   //       const meteorRadius = Math.random() * 20 + 10;
//   //       const meteorX =
//   //         Math.random() * (canvasRef.current!.width - meteorRadius * 2) +
//   //         meteorRadius;
//   //       const meteorY = -meteorRadius;
//   //       setMeteors((meteors) => [
//   //         ...meteors,
//   //         { x: meteorX, y: meteorY, radius: meteorRadius },
//   //       ]);
//   //     };

//   //     intervalId = window.setInterval(dropMeteor, 1000);

//   //     return () => {
//   //       window.clearInterval(intervalId);
//   //     };
//   //   }, []);

//   useEffect(() => {
//     let intervalId: number;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       switch (event.key) {
//         case "ArrowLeft":
//           setShipPos((pos) => ({ ...pos, x: pos.x - 10 }));
//           break;
//         case "ArrowRight":
//           setShipPos((pos) => ({ ...pos, x: pos.x + 10 }));
//           break;
//         case "ArrowUp":
//           setShipPos((pos) => ({ ...pos, y: pos.y - 10 }));
//           break;
//         case "ArrowDown":
//           setShipPos((pos) => ({ ...pos, y: pos.y + 10 }));
//           break;
//         case " ":
//           setIsFiring(true);
//           break;
//         default:
//           break;
//       }
//     };

//     const handleKeyUp = (event: KeyboardEvent) => {
//       if (event.key === " ") {
//         setIsFiring(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     if (isFiring) {
//       intervalId = window.setInterval(() => {
//         setShipPos((pos) => ({ ...pos, y: pos.y - 20 }));
//       }, 100);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//       window.clearInterval(intervalId);
//     };
//   }, [isFiring]);

//   return (
//     <div tabIndex={0}>
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: "100%",
//           height: "100%",
//           backgroundImage: `url(${space})`,
//         }}
//         width={window.innerWidth}
//         height={window.innerHeight}
//       />
//       <div style={{ position: "absolute", top: 10, left: 10, color: "white" }}>
//         Score: {score}
//       </div>
//       <div style={{ position: "absolute", top: 10, right: 10, color: "white" }}>
//         Health: {health}
//       </div>
//     </div>
//   );
// };
// export default Canvas;
import space from "../assets/space.gif";
import player from "../assets/player.png";
import meteorImg from "../assets/meteor.png";
import sound from "../assets/music.mp3";
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

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (!context) return;

    const drawShip = () => {
      const image = new Image();
      image.src = `${player}`;
      //   context.beginPath();
      //   context.moveTo(shipPos.x, shipPos.y - 20);
      //   context.lineTo(shipPos.x - 10, shipPos.y);
      //   context.lineTo(shipPos.x + 10, shipPos.y);
      //   context.closePath();
      //   context.fillStyle = "white";
      //   context.fill();
      context.drawImage(image, shipPos.x, shipPos.y, 75, 100);
    };

    const drawFireball = () => {
      // context.fillStyle = "orange";

      //   context.beginPath();
      //   context.arc(shipPos.x + 35, shipPos.y - 100, 5, 0, 2 * Math.PI);
      //   context.fillStyle = "yellow";
      //   context.fill();

      //   context.lineWidth = 5;
      //   context.stroke();

      context.fillStyle = "orange";
      const fireWidth = 5;
      const fireHeight = 150;
      //   const shipWidth = 20;
      const fireX = shipPos.x + 32.5;
      const fireY = shipPos.y - 150;
      context.fillRect(fireX, fireY, fireWidth, fireHeight);

      //   context.beginPath();
      //   const fireWidth = 10;
      //   const fireHeight = 200;

      //   // const shipHeight = 20;
      //   const fireX = shipPos.x + shipWidth / 2 - fireWidth / 2;
      //   const fireY = shipPos.y - fireHeight;
      //   context.fillRect(fireX, fireY, fireWidth, fireHeight);
      //   context.fillStyle = "red";
      //   context.fill();

      //   context.arc(fireballPos.x, fireballPos.y, 5, 0, Math.PI * 2);
    };

    const drawMeteor = (meteor: { x: number; y: number; radius: number }) => {
      //   context.beginPath();
      //   context.arc(meteor.x, meteor.y, meteor.radius, 0, Math.PI * 2);
      //   context.fillStyle = "gray";
      //   context.fill();
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
        audio.play();
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

  //         setIsFiring(true);

  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   const handleKeyUp = (event: KeyboardEvent) => {
  //     if (event.key === " ") {
  //       setIsFiring(false);
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("keyup", handleKeyUp);

  //   if (isFiring) {
  //     intervalId = window.setInterval(() => {
  //       setShipPos((pos) => ({ ...pos, y: pos.y - 20 }));
  //     }, 100);
  //   }

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("keyup", handleKeyUp);
  //     window.clearInterval(intervalId);
  //   };
  // }, []);
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
