import React, { useEffect, useRef, useState } from "react";
import Window2 from "../Window2";
import { useSelector } from "react-redux";
import { cameraToggle } from "../../redux/slice/windowSlice";
import { saveImage } from "../../lib/db";
const Camera = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const windowOpen = useSelector((state) => state.camera); // if needed
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        videoRef.current.play();
      }
      setStream(newStream);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const capturePhoto = async () => {
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0);

    const imageData = canvasRef.current.toDataURL("image/png");
    setPhoto(imageData);
    await saveImage(imageData);
    setGallery(await getImages());
  };

  const stopCamera = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  return (
    <Window2 toggle={cameraToggle} state={windowOpen} name={"Camera"}>
      <div className="w-full h-[550px] mt-0 rounded-md overflow-clip ">
        <video
          autoPlay
          playsInline
          className="w-full h-full rounded-md"
          ref={videoRef}
        ></video>
      </div>

      <div className="flex items-center justify-between gap-2 mt-4 px-10">
        <div className="flex items-center gap-2">
          <button
            onClick={startCamera}
            className="bg-green-500 text-white w-10 h-10  hover:cursor-pointer hover:bg-green-800 rounded-full"
            disabled={!!stream} // disable if already streaming
          >
            Start
          </button>

          <button
            onClick={stopCamera}
            className="bg-red-500 text-white w-10 h-10 hover:cursor-pointer hover:bg-red-800 rounded-full"
            disabled={!stream} // disable if no stream
          >
            Stop
          </button>
        </div>
        <button
          onClick={capturePhoto}
          className="bg-white w-18 h-18  hover:cursor-pointer flex justify-center items-center hover:bg-slate-500   rounded-full"
        >
          <span className="block rounded-full w-15 h-15 bg-white outline-2 outline-black  active:bg-slate-500"></span>
        </button>
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <div className=" w-18 h-18  hover:cursor-pointer flex justify-center items-center hover:bg-slate-500  rounded">
          <img src={photo} className="border rounded" />
        </div>
      </div>
    </Window2>
  );
};

export default Camera;
