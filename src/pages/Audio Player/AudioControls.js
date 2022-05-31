import React from "react";
import {ReactComponent as Play} from "../../assets/play.svg";
import {ReactComponent as Pause} from "../../assets/pause.svg";
import {ReactComponent as Forward} from "../../assets/next.svg";
import {ReactComponent as Backward} from "../../assets/prev.svg";

const AudioControls = ({isPlaying, onPlayPauseClick, onBackwardClick, onForwardClick}) => (
    <div className="audio-controls">
        <button
            type="button"
            className="backward"
            aria-label="Backward"
            onClick={onBackwardClick}
        >
            <Backward/>
        </button>
        {isPlaying ? (
            <button type="button"
                    className="pause"
                    onClick={() => onPlayPauseClick(false)}
                    aria-label="Pause">
                <Pause/>
            </button>
        ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <Play/>
            </button>
        )}
        <button
            type="button"
            className="forward"
            aria-label="Forward"
            onClick={onForwardClick}
        >
            <Forward/>
        </button>
    </div>
);
export default AudioControls;
