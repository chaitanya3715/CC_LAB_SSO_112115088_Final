import React, { Component, useState } from "react";
// import { connect } from "react-redux";
import Contact from "./Contact";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../layout/login";
// import { getContacts } from "../../actions/contactActions";

// class Contacts extends Component {
//   componentDidMount() {
//     this.props.getContacts();
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1 className="mb-3">
//           <span className="text-danger">Contact</span> List
//         </h1>
//         {this.props.contacts.map(contact => (
//           <Contact contact={contact} key={contact.id} />
//         ))}
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: state.contact.contacts
// });

// export default connect(
//   mapStateToProps,
//   { getContacts }
// )(Contacts);

let Contacts = () => {
  let {user,loginWithRedirect}=useAuth0();
  let cl = JSON.parse(localStorage.getItem("contacts1")) || [];
  let [contacts,setContacts]=useState([]);

  // console.log('Initial contacts:', typeof contacts);

  for (let i = 0; i < cl.length; i++) {
    contacts=[...contacts,cl[i]]
  }


  return <>
    {user?<>
            {contacts && contacts.map((contact) => (
          <Contact contact={JSON.parse(localStorage.getItem(contact))} key={"hello"}></Contact>
      ))}

    </>:<LoginButton></LoginButton>}
  </>
};

export default Contacts;
