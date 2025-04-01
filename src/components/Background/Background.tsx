import { useEffect, useRef, useState } from "react";

import styles from "./background.module.css";

export default function Background() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleEnded = () => {
        setIsPlaying(false);
        console.log(isPlaying);
      };
      videoElement.addEventListener("ended", handleEnded);
      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [isPlaying]);

  return (
    <>
      {isPlaying ? (
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            autoPlay
            muted
            className={styles.backgroundVideo}
          >
            <source src="/assets/autobiografia.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className={styles.backgroundContainer}>
          <img
            src="/assets/autobiografia.png"
            alt="Autobiografía"
            className={styles.backgroundImage}
          />
        </div>
      )}
    </>
  );
}
