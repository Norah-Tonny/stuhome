
import React, { createContext, useState } from 'react';

export const Context = createContext()

const State = ({ children }) => {
    const [item, setItem] = useState(null);
    const [hostels, setHostels] = useState([]);
    const [docId, setDocId] = useState([]);
    const [itemId, setItemId] = useState("");
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [update,setUpdate]=useState('')




    return (
        <Context.Provider value={{ itemState: [item, setItem], hostelState: [hostels, setHostels],docIdState:[docId,setDocId], itemIdState:[itemId, setItemId] ,loaderState:[loader,setLoader],emailState:[email, setEmail] ,passwordState: [password, setPassword]}}>

            {children}

        </Context.Provider>
    )

}
export default State;