import { createContext, useContext } from "react";

// eslint-disable-next-line no-undef
const HomeContext = createContext({
    home: [],
    _setHome: () => {},
});

// eslint-disable-next-line react/prop-types
export const HomeProvider = ({ children }) => {
    return (
        <HomeContext.Provider>
            {children}
        </HomeContext.Provider>
    )
}

export const useHomeContext = () => useContext(HomeContext); // Fixed hook name