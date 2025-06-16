import MemberContext from '../contexts/MemberContext';
import { useState, useEffect, useContext } from 'react';


function MemberProvider({children}) {

return (
<>
<MemberContext.Provider
    value={{}}
>
    {children}
</MemberContext.Provider>
</>
)}

export default MemberProvider
