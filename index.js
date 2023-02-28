/* eslint-disable import/prefer-default-export */
import navigation from './modules/navigation.js';
import AllBook from './modules/allBook.js';
import now from './modules/time.js';

navigation();

const addBtn = document.getElementById('add_New_Book');
const bookLibrary = new AllBook();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('bookName').value;
  const author = document.getElementById('author').value;
  bookLibrary.addBook(title, author);
});

bookLibrary.displayBooks();

const timeDiv = document.getElementById('time');
timeDiv.innerText = now;