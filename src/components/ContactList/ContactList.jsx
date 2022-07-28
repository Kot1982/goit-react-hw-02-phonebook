export const ContactList = ({ contacts }) => {
    return (
        
        <ul>
            {contacts.map(({ name, number }) => {
                return (
                    <li>
                        <p>{name}: {number}</p>
                    </li>
                )
            })
            }
            </ul>

    )
}