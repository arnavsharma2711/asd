import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCopy,
  faVideoCamera,
  faVideoSlash,
  faMicrophoneLines,
  faMicrophoneLinesSlash,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

function Header({
  onVideoToggle,
  onAudioToggle,
  userId,
  showBoard,
  setShowBoard,
  setshowEditor,
  onChangeBoard,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setShowNotification(!showNotification);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const toggleAudioCss = () => {
    setAudio(!audio);
  };

  const toggleVideoCss = () => {
    setVideo(!video);
  };

  const handleBoard = () => {
    setShowBoard(true);
    setshowEditor(false);
  };
  const handleCode = () => {
    setshowEditor(true);
    setShowBoard(false);
  };
  return (
    <div className="bg-purple-700 text-white">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0">
          <h1 className="font-semibold text-3xl tracking-tight mr-6">
            Code With Companion
          </h1>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-stone-100 border-gray-600 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon className="fa-xl" icon={faBars} />
          </button>
        </div>
        {showNotification && (
          <div className="bg-white rounded shadow-md absolute top-0 right-0 mt-16 mr-5 p-4">
            <p className="text-gray-800 mr-6">Room Url Copy</p>
            <button
              className="text-sm text-stone-100 hover:text-gray-800 absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        )}
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow lg:text-right">
            <a
              className="block mt-4 lg:inline-block lg:mt-0  cursor-pointer text-stone-100 hover:text-white mr-4"
              onClick={() => {
                onVideoToggle(userId);
                toggleVideoCss();
              }}
            >
              {video ? (
                <FontAwesomeIcon className="fa-xl" icon={faVideoCamera} />
              ) : (
                <FontAwesomeIcon className="fa-xl" icon={faVideoSlash} />
              )}
            </a>
            <a
              className="block mt-4 lg:inline-block lg:mt-0  cursor-pointer text-stone-100 hover:text-white mr-10"
              onClick={() => {
                onAudioToggle(userId);
                toggleAudioCss();
              }}
            >
              {audio ? (
                <FontAwesomeIcon
                  className="fa-xl"
                  size={70}
                  icon={faMicrophoneLines}
                />
              ) : (
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faMicrophoneLinesSlash}
                />
              )}
            </a>
            <a
              className="block mt-4 text-lg lg:inline-block lg:mt-0 cursor-pointer text-stone-100 hover:text-white mr-10"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faCopy} />
              <span className="ml-1">Room URL </span>
            </a>
            <button
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-stone-100 hover:text-white mr-4"
              onClick={() => handleCode()}
            >
              Code Editor
            </button>
            <button
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-stone-100 hover:text-white mr-4"
              onClick={() => {
                onChangeBoard(!showBoard);
                handleBoard();
              }}
            >
              Whiteboard
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
