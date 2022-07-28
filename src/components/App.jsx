import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
    };

  this.setState(({ contacts }) => {
      console.log(contacts)
      // if (
      //   contacts.some(
      //     contact => contact.name.toLowerCase() === name.toLowerCase()
      //   )
      // ) {
      //   return alert(`${name} is already in contacts!`);
      // }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts}/>
        </div>
      </>
    );
  }
}
export default App;
