class AllBook {
  constructor() {
    this.books = [];
    this.listBox = document.getElementById('list');
  }

    getNextId = () => {
      let maximumId = 0;
      this.books.forEach((book) => {
        if (book.id > maximumId) {
          maximumId = book.id;
        }
      });
      return maximumId + 1;
    }

    displayBooks = () => {
      const book = localStorage.getItem('book');
      this.book = book;
      if (this.book === null) {
        this.books = [];
      } else {
        this.books = JSON.parse(book);
      }
      const listDiv = document.getElementById('list');
      this.books.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        listDiv.appendChild(bookDiv);
        const title = document.createElement('p');
        title.innerText = `${book.title} by ${book.author}`;
        bookDiv.appendChild(title);
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove';
        removeBtn.innerText = 'Remove';
        bookDiv.appendChild(removeBtn);
        /* eslint-disable no-unused-vars */
        removeBtn.addEventListener('click', (id) => {
          this.removeBook(book.id);
        });
      });
    }

    addBook = (title, author) => {
      const book = localStorage.getItem('book');
      if (book === null) {
        this.books = [];
      } else {
        this.books = JSON.parse(book);
      }
      const id = this.getNextId();
      this.books.push({
        id,
        title,
        author,
      });
      localStorage.setItem('book', JSON.stringify(this.books));
      window.location.reload();
      this.displayBooks();
    }

    removeBook = (id) => {
      const book = localStorage.getItem('book');
      this.books = JSON.parse(book);
      const bookIndex = this.books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        this.books.splice(bookIndex, 1);
      }
      localStorage.setItem('book', JSON.stringify(this.books));
      window.location.reload();
      this.displayBooks();
    }
}

export default AllBook;