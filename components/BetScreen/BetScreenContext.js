import { createContext, useMemo } from 'react';

const BetScreenContext = createContext({ betID: null });

function BetScreenContextProvider({ betID, children }) {
  const contextValue = useMemo(
    () => ({
      betID,
    }),
    [betID]
  );
  return (
    <BetScreenContext.Provider value={contextValue}>
      {children}
    </BetScreenContext.Provider>
  );
}

export default BetScreenContextProvider;
export { BetScreenContext };
