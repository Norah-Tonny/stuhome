
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
    const [update, setUpdate] = useState('');
    const [user, setUser] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [details, setDetails] = useState({
        Hostel: "",
        Image: "",
        Position: "",
        Agent: "",
        Pricing: "",
        Location: "",
        Requirements: "",
        Anemities: "",
        Rules: "",
        About: ""

    })


    return (
        <Context.Provider value={{ itemState: [item, setItem], detailsState: [details, setDetails], hostelState: [hostels, setHostels], docIdState: [docId, setDocId], userState: [user, setUser], itemIdState: [itemId, setItemId], loaderState: [loader, setLoader], emailState: [email, setEmail], passwordState: [password, setPassword], userOn:[isLoggedIn, setIsLoggedIn] }}>

            {children}

        </Context.Provider>
    )

}
export default State;