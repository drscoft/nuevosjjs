import React from 'react';

type EffectContextType = {
  effectsEnabled: boolean;
  setEffectsEnabled: (value: boolean) => void;
};

const EffectContext = React.createContext<EffectContextType>({
  effectsEnabled: true,
  setEffectsEnabled: () => {},
});

export const EffectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [effectsEnabled, setEffectsEnabled] = React.useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('effectsEnabled');
      if (stored === 'false') return false;
      return true;
    } catch (err) {
      return true;
    }
  });

  const setEffects = (value: boolean) => {
    try {
      localStorage.setItem('effectsEnabled', value ? 'true' : 'false');
    } catch (err) {}
    setEffectsEnabled(value);
  };

  return (
    <EffectContext.Provider value={{ effectsEnabled, setEffectsEnabled: setEffects }}>
      {children}
    </EffectContext.Provider>
  );
};

export const useEffectContext = () => React.useContext(EffectContext);

export default EffectContext;
