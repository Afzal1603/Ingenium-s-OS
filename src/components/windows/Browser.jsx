import Window2 from "../Window2";
import React, { useState, useEffect, useRef } from "react";
import { RefreshCcw, Home } from "lucide-react";
import { useSelector } from "react-redux";
import { browserToggle } from "../../redux/slice/pcSlice";

const HOME_URL = "https://www.google.com/webhp?igu=1";
const HOME_DISPLAY = "https://www.google.com";
const Browser = () => {
  const browserOpen = useSelector((state) => state.browser);
  const [url, setUrl] = useState(HOME_URL);
  const iframeRef = useRef(null);

  // Load last visited URL from localStorage
  useEffect(() => {
    const lastUrl = localStorage.getItem("chrome-url");
    if (lastUrl) {
      setUrl(lastUrl);
    }
  }, []);

  // Save visited URL
  const storeVisitedUrl = (url, display) => {
    localStorage.setItem("chrome-url", url);
    localStorage.setItem("chrome-display-url", display);
  };

  const refreshChrome = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  // Go to home
  const goToHome = () => {
    setUrl(HOME_URL);
    storeVisitedUrl(HOME_URL, HOME_DISPLAY);
  };

  // Handle Enter key in URL bar
  const checkKey = (e) => {
    if (e.key === "Enter") {
      let enteredUrl = e.target.value.trim();
      if (!enteredUrl) return;

      if (
        !enteredUrl.startsWith("http://") &&
        !enteredUrl.startsWith("https://")
      ) {
        enteredUrl = "https://" + enteredUrl;
      }

      enteredUrl = encodeURI(enteredUrl);

      let display = enteredUrl;

      if (enteredUrl.includes("google.com")) {
        enteredUrl = HOME_URL;
        display = HOME_DISPLAY;
      }

      setUrl(enteredUrl);

      storeVisitedUrl(enteredUrl, display);
      e.target.blur();
    }
  };

  return (
    <Window2 name={"Chrome"} toggle={browserToggle} state={browserOpen}>
      <div className="h-full w-full flex flex-col bg-ub-cool-grey">
        <div className="w-full py-0.5 pb-3 flex justify-start items-center text-white text-sm border-b border-gray-900">
          <div
            onClick={refreshChrome}
            className="ml-2 mr-1 flex justify-center items-center rounded-fullbg-opacity-0 hover:bg-opacity-10 cursor-pointer"
          >
            <RefreshCcw className="w-5 " />
          </div>

          <div
            onClick={goToHome}
            className="mr-2 ml-1 flex justify-center items-center rounded-full  bg-opacity-0 hover:bg-opacity-10 cursor-pointer"
          >
            <Home></Home>
          </div>

          <input
            onKeyDown={checkKey}
            id="chrome-url-bar"
            className=" bg-zinc-800  bg-ub-grey rounded-full pl-3 py-0.5 mr-3 w-5/6 text-gray-300 focus:text-white outline-none"
            type="url"
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        <iframe ref={iframeRef} src={url} className="w-full h-full"></iframe>
      </div>
    </Window2>
  );
};

export default Browser;
