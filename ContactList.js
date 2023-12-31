import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.Contacts.map((Contact) => {
        return <ContactCard contact={Contact} />;
    });
    return <div className="ui celled list">{renderContactList}</div>
};

export default ContactList;