import React from 'react';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value)
    this.setState({name: event.currentTarget.value})
  }

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <form>
            Name
            <label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              ></input>
            </label>
            <button type='submit'>Add contact</button>
          </form>
          <h2>Contacts</h2>
        </div>
      </>
    );
  }
}
export default App;
