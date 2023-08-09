import React, { createContext, useState } from "react";

interface BagContextType {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const BagContext = createContext<BagContextType>({
    isOpen: false,
    setIsOpen: () => { },
});

export function BagProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BagContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </BagContext.Provider>
    );
}
