import React from "react";

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
  };

    // handleNameChange = event => {
    // // console.log(event.currentTarget.value)
    // this.setState({name: event.currentTarget.value})
    // }

    // handleNumberChange = event => {
    // // console.log(event.currentTarget.value)
    // this.setState({number: event.currentTarget.value})
    // }

    handleChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name] : value})
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state)
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: '',})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
                </label>
                <label>Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
            <button type='submit'>Add contact</button>
          </form>
        )
    }
}

export default ContactForm;