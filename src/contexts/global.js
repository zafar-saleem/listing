import {
  createContext,
  useContext,
  useState
} from 'react';

export const MainContext = createContext({});
export const useMain = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [leadingNews, setLeadingNews] = useState({});
  const [update, setUpdate] = useState(0);

  return (
    <MainContext.Provider
      value={{
        mainResult: items,
        update,
        leadingNews,
        setLeadingNews,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
