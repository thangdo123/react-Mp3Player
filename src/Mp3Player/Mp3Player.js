import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

let songs = [
  {
    name: "D (Half Moon)",
    cover: require("./img/half moon.jpg"),
    url: require("./audio/Dean - D (Half Moon).mp3"),
  },
  {
    name: "DIE 4 YOU",
    cover: require("./img/die4you.jpg"),
    url: require("./audio/Dean - DIE 4 YOU.mp3"),
  },
  {
    name: "What 2 Do",
    cover: require("./img/what2do.jpg"),
    url: require("./audio/Dean - What 2 Do.mp3"),
  },
  {
    name: "HƠI ẢO #11",
    cover: require("./img/HƠI ẢO 11.jpg"),
    url: require("./audio/HƠI ẢO 11 - Lucin3x.mp3"),
  },
  {
    name: "Chine Anthem",
    cover: require("./img/avocado.png"),
    url: require("./audio/chinese anthem.mp3"),
  },
];

function convertTime(rawTime) {
  let minute = Math.floor(rawTime / 60);
  let second = Math.floor(rawTime % 60);
  if (second < 10) {
    second = "0" + second;
  }
  return minute + ":" + second;
}

export default function Mp3Player() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const [showSongList, setShowSongList] = useState(true);

  const handleNextSong = () => {
    if (currentSongIndex === songs.length - 1) {
      return setCurrentSongIndex(0);
    }
    setCurrentSongIndex(currentSongIndex + 1);
  };

  const handlePrevSong = () => {
    if (currentSongIndex === 0) {
      return setCurrentSongIndex(songs.length - 1);
    }

    setCurrentSongIndex(currentSongIndex - 1);
  };

  return (
    <div className={styles["mp3-container"]}>
      <div className={styles["screen-container"]}>
        <div className={styles["title-name"]}>SONY</div>
        <div className={styles["screen"]}>
          <NowPlaying
            song={songs[currentSongIndex]}
            play={play}
            show={!showSongList}
          />
          <SongList
            show={showSongList}
            selectSong={(index) => {
              setCurrentSongIndex(index);
              setShowSongList(false);
            }}
          />
        </div>
      </div>

      <div className={styles["button-container"]}>
        <div className={styles["text-btn"]}>
          <div onClick={() => setShowSongList(true)}>HOME</div>
          <div onClick={() => setShowSongList(false)}>BACK</div>
        </div>
        <div className={styles["arrow-btn"]}>
          <i className={"bi bi-caret-up-fill " + styles["up"]}></i>
          <i className={"bi bi-caret-down-fill " + styles["down"]}></i>
          <i
            onClick={handleNextSong}
            className={"bi bi-caret-right-fill " + styles["right"]}
          ></i>
          <i
            onClick={handlePrevSong}
            className={"bi bi-caret-left-fill " + styles["left"]}
          ></i>
          <div onClick={() => setPlay(!play)} className={styles["play-btn"]}>
            {play ? (
              <i className="bi bi-pause-fill"></i>
            ) : (
              <i className="bi bi-play-fill"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NowPlaying({ song, play, show }) {
  const audioRef = useRef();
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <div style={{ display: show ? "unset" : "none" }}>
      <div className={styles["song-name"]}>{song.name}</div>
      <img src={song.cover} className={styles["cover-img"]} alt="" />
      <div className={styles["audio-container"]}>
        <div className={styles["play-pause-icon"]}>
          {play ? (
            <i className="bi bi-pause"></i>
          ) : (
            <i className="bi bi-play"></i>
          )}
        </div>
        <div>{convertTime(time)}</div>
        <div className={styles["slider-container"]}>
          <input
            className={styles["slider"]}
            type="range"
            min={0}
            max={duration}
            value={time}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          />
        </div>
        <div> {convertTime(duration)} </div>
      </div>

      <audio
        className={styles["audio"]}
        src={song.url}
        onLoadedData={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setTime(e.target.currentTime)}
        ref={audioRef}
        autoPlay
      />
    </div>
  );
}

function SongList({ show, selectSong }) {
  return (
    <div
      className={styles["songs-list"]}
      style={{ display: show ? "flex" : "none" }}
    >
      {songs.map((song, index) => (
        <SongItem song={song} key={index} onClick={() => selectSong(index)} />
      ))}
    </div>
  );
}

function SongItem({ song, onClick }) {
  return (
    <div className={styles["song-items"]} onClick={onClick}>
      <img src={song.cover} className={styles["song-pre-pic"]} alt="" />
      <div className={styles["song-pre-name"]}>{song.name}</div>
    </div>
  );
}
