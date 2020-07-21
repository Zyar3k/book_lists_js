const bookList = bookData.books;
console.log(bookData);

bookList.map((book, index) => {

  const {title, author, page, key} = book;
  console.log(book);


  const bookWrapper = document.querySelector('.bookList');
  const bookBox = document.createElement('div');
  bookBox.classList.add('bookBox');
  
  const bookBoxContent = `
        <div>${key+1}- ${title}</div>
        <div>autor - ${author}</div>
        <div>stron - ${page}</div>
  `;
  bookBox.innerHTML = bookBoxContent;
  bookWrapper.append(bookBox);
});
