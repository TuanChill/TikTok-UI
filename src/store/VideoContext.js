import React, { createContext, useRef, useState } from 'react';

export const videoContext = createContext();

const VideoProvider = ({ children }) => {
    const [isMuted, setMuted] = useState(true);

    const myVolume = useRef(0.8);

    const toggleMuted = () => {
        setMuted(isMuted === false ? true : false);
    };

    const value = {
        isMuted,
        myVolume: myVolume.current,
        setMuted,
        toggleMuted,
    };

    return <videoContext.Provider value={value}>{children}</videoContext.Provider>;
};

export default VideoProvider;
