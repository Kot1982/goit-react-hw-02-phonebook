export const ContactList = ({ contacts }) => {
    return (
        
        <ul>
            {contacts.map(({ name, number, id }) => {
                return (
                    <li key={id}>
                        <p>{name}: {number}</p>
                    </li>
                )
            })
            }
            </ul>

    )
}