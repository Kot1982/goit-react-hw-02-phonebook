export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        
        <ul>
            {contacts.map(({ name, number, id }) => {
                return (
                    <li key={id}>
                        <p>{name}: {number}</p>
                        <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                )
            })
            }
            </ul>

    )
}