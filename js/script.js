const bookList = bookData.books;
console.log(bookData);

bookList.map((book, index) => {

  const {title, author, page, link} = book;

  const bookWrapper = document.querySelector('.bookList');
  const bookBox = document.createElement('div');
  bookBox.classList.add('bookBox');
  
  const bookBoxContent = `
    <div class="bookInfo">
      <div class="infoDet">
        <div class="bookNo">${index+1}.</div>
        <a href="${link}" target='_blank' rel='noopener noreferrer'><i class="fas fa-info-circle"></i></a>
      </div>
      <div class="pageWrapper">
        <div class="bookPage"><i class="fas fa-book-open"></i>${page}</div>
        <div class="bookTime"><i class="far fa-clock"></i>5h30min</div>
      </div>
    </div>
    <div class="bookTitle">${title}</div>
    <div class="bookAuthor">${author}</div>
    <div class="myInfo">
      <i class="fas fa-check-double"></i>
      <i class="fas fa-tablet-alt"></i>
    </div>
  `;
  bookBox.innerHTML = bookBoxContent;
  bookWrapper.append(bookBox);
});
