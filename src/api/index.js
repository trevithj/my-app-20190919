import contacts from './testContacts';
const url = 'https://my.api.mockaroo.com/contacts.json?key=d6198fe0';

export const getContactsTest = () => {
  return Promise.resolve(contacts);
};

export const getContacts = () => {
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Status: ${response.status}`);
    })
    .catch(err => {
      console.log(err.message);
      return [];
    });
};
