import React, { createContext, useState } from 'react';

export const MutedContext = createContext();

const MutedProvider = ({ children }) => {
    const [isMuted, setMuted] = useState(true);

    const toggleMuted = () => {
        setMuted(isMuted === false ? true : false);
    };

    const value = {
        isMuted,
        toggleMuted,
    };

    return <MutedContext.Provider value={value}>{children}</MutedContext.Provider>;
};

export default MutedProvider;
