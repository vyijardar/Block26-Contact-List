import { useEffect, useState } from "react";

export default function SelectedContact({selectedContactId}) {

    const [SingleContact, setSingleContact] = useState([])
    useEffect(() => {
        async function fetchSingleContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json();
                setSingleContact(result);

            } catch (error) {
                console.error(error);
            }
        }
        fetchSingleContact()
    }, [])
    return (
        <>  
            <div className="main">Contact Details</div>
            <div className="info">Name : {SingleContact.name}</div>
            <div className="info">Email: {SingleContact.email}</div>
            <div className="info">Phone : {SingleContact.phone}</div>
            <div className="info">Website : {SingleContact.website}</div> 
        </>

    );
}