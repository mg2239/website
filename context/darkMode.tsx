import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

type DarkModeState = {
  enabled: boolean;
  toggle: () => void;
};

const DarkModeContext = createContext<DarkModeState>({
  enabled: false,
  toggle: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled((prev) => !prev);
  };

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    if (enabled) {
      root.setAttribute('class', 'dark');
    } else {
      root.removeAttribute('class');
    }
  }, [enabled]);

  return (
    <DarkModeContext.Provider value={{ enabled, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
