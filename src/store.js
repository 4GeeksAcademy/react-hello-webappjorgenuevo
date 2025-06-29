export const initialStore=()=>{
  return{
    message: null,
    contacts:[],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "get_contact":
      return {
        ...store,contacts:action.payload
      }
      case "delete_contact":
        let filterContacts = store.contacts.filter(contact=>contact.id!==action.payload)
        return { ...store,contacts:filterContacts

        }
        case "add_contact":
          return {
            ...store,contacts:[...store.contacts,action.payload]
          }
          case "edit_contact":
            return{
              ...store,contacts:store.contacts.map(contact=>
                contact.id === action.payload.id ? action.payload : contact
              )
            }
    default:
      throw Error('Unknown action.');
  }    
}
