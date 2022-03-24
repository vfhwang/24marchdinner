import * as React from "react";
import { useState } from "react";
import flag from "../images/american-flag-small.gif";
import header from "../images/american-diner-text.gif";
import text1 from "../images/louis-victor.gif";
import text2 from "../images/invite-you.gif";
import text3 from "../images/apoa.gif";
import text4 from "../images/reece.gif";
import text5 from "../images/years.gif";
import text6 from "../images/and-join.gif";
import diner from "../images/american-diner-model.webp";

import "../reset.css";
import splashImage from "../images/splash.jpeg";

const pageStyles = {
  color: "white",
  padding: "0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "9vw",
};

const flagStyle = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  imageRendering: "pixelated",
  zIndex: "-1",
};

const dinerStyle = {
  width: "80vw",
  imageRendering: "pixelated",
  zIndex: "-1",
  margin: "20vh auto",
};

const gif = {
  width: "100vw",
  height: "100vh",
  imageRendering: "pixelated",
  zIndex: "-1",
};

const splash = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  imageRendering: "pixelated",
  zIndex: "10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F2F2F2",
  cursor: "pointer",
};

const splashStyle = {
  width: "50vw",
};

const button = {
  position: "fixed",
  bottom: "0",
  right: "0",
};

const text = {
  minHeight: "100vh",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mixBlendMode: "difference",
};

// markup
const IndexPage = () => {
  const [displayEnvelope, setDisplayEnvelope] = useState(true);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/song.mp3")
  );

  const start = () => {
    audio.play();
    setDisplayEnvelope(false);
  };

  const stop = () => {
    audio.pause();
  };

  return (
    <main style={pageStyles}>
      {displayEnvelope && (
        <div style={splash} onClick={() => start()}>
          <img style={splashStyle} src={splashImage} />
        </div>
      )}
      <img style={flagStyle} src={flag} />
      <img style={gif} src={text1} />
      <img style={gif} src={text2} />
      <img style={gif} src={text3} />
      <img style={gif} src={text4} />
      <img style={gif} src={text5} />
      <img style={gif} src={text6} />
      <img style={gif} src={header} />
      <img style={dinerStyle} src={diner} />
      <div style={text}>
        <p>24 March 2022</p>
        <p>Come around like 7?</p>
        <p>Text for address</p>
      </div>
      <button onClick={() => stop()} style={button}>
        shhhhhh
      </button>
    </main>
  );
};

export default IndexPage;
