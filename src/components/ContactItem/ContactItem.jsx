import { Item, Button } from "./ContactItem.styled"

export const ContactItem = ({name, number, id, onDeleteContact}) => {
    return (
        <>
        <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
            </Item>
            </>
    )
}