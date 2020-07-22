const bookList = bookData.books;
const booksWrapper = document.querySelector('.bookList');

function timeCounter(params) {
  let page = params
  let hours = Math.floor(page/60);
  let minutes = page%60;
  params = `${hours}h:${minutes}m`;
return  params
};

function renderBooks() {
  booksWrapper.innerHTML = bookList.map((book, key) => 
    `
    <div class="bookBox ${book.readed}Read ${book.available}Avbl">
      <div class="bookInfo">
      <div class="infoDet">
        <div class="bookNo">${key+1}.</div>
        <a href="${book.link}" target='_blank' rel='noopener noreferrer'><i class="fas fa-info-circle"></i></a>
      </div>
      <div class="pageWrapper">
        <div class="bookPage"><i class="fas fa-book-open"></i>${book.page}</div>
        <div class="bookTime"><i class="far fa-clock"></i>${timeCounter(book.page)}</div>
      </div>
      </div>
      <div class="bookTitle">${book.title}</div>
      <div class="bookAuthor">${book.author}</div>
      <div class="myInfo">
      <i class="fas fa-check-double ${book.readed}"></i>
      <i class="fas fa-tablet-alt ${book.available}"></i>
      </div>
  </div>
  `).join('');
};

renderBooks();

function representMainDetails() {
  const allBooks = document.querySelectorAll('.allBooks');
  const bookReaded = document.querySelector('.readedNo');
  const bookUnreaded = document.querySelector('.unreadedNo');
  const bookAvailable = document.querySelector('.availableNo');
  const bookUnavailable = document.querySelector('.unavailableNo');

  let read = 0;
  let unread = 0;
  let available = 0;
  let unavailable = 0;

  bookList.forEach(book => {
    if (book.readed) {
      read += 1;
    } if (!book.readed) {
      unread += 1;
    } if (book.available) {
      available += 1;
    } if (!book.available) {
      unavailable += 1;
    }
  });

  allBooks.forEach(element => {
    element.innerHTML = bookList.length;
  });

  bookReaded.innerHTML = read;
  bookUnreaded.innerHTML = unread;
  bookAvailable.innerHTML = available;
  bookUnavailable.innerHTML = unavailable;
};
representMainDetails();


function mainFilter() {
  
  const boxes = document.querySelectorAll('.bookBox');
  const redtrue = document.querySelectorAll('.trueRead');
  const redfalse = document.querySelectorAll('.falseRead');  
  const avblTrue = document.querySelectorAll('.trueAvbl');  
  const avblFalse = document.querySelectorAll('.falseAvbl');  
  const allBooksBtn = document.querySelector('#allBooks');
  const readedBtn = document.querySelector('#readedBtn');
  const unReadedBtn = document.querySelector('#unReadedBtn');
  const availableBtn = document.querySelector('#availableBtn');
  const unAvailableBtn = document.querySelector('#unavailableBtn');

  allBooksBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.classList.remove('hide');
    });
  });
  
  readedBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.classList.add('hide');
    });
    if (redtrue) {  
      for (const ite of redtrue) {        
        ite.classList.remove('hide');
      }
    }
  });
  
  unReadedBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.classList.add('hide');
    });
    if (redfalse) {
      for (const ite of redfalse) {
        ite.classList.remove('hide');
      }
    }
  });

  availableBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.classList.add('hide');
    });

    if (avblTrue) {
      for (const ite of avblTrue) {
        ite.classList.remove('hide');
      }
    }
  });

  unAvailableBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.classList.add('hide');
    });

    if (avblFalse) {
      for (const ite of avblFalse) {
        ite.classList.remove('hide');
      }
    }
  });
}

mainFilter();
