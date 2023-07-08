// const argv = require('yargs').argv;
const contacts = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      //   console.log(allContacts);
      break;
    case 'get':
      const bookById = await contacts.getContactById(id);
      console.log(bookById);
      break;

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\\x1B[31m Unknown action type!');
  }
}

// invokeAction(argv);
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '05olLMgyVQdWRwgKfg5J6' });
invokeAction({
  action: 'add',
  name: 'Mango ',
  email: 'mango@gmail.com',
  phone: '322-22-22',
});
