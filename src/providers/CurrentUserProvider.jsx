import { useState, useEffect } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function CurrentUserProvider({ children }) {
  const LOCAL_KEY = 'sterling-user';

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  const [calendarIsHidden, setCalendarIsHidden] = useState(true);
  const [filterIsHidden, setFilterIsHidden] = useState(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(LOCAL_KEY);
    }
  }, [currentUser]);

  const loggedIn = !!currentUser?.id;

  return (
    <CurrentUserContext.Provider value={{
      loggedIn,
      currentUser,
      setCurrentUser,
      calendarIsHidden,
      setCalendarIsHidden,
      filterIsHidden,
      setFilterIsHidden
    }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;