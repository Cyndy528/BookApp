$(function(){
	
	var booksUrl = "https://super-crud.herokuapp.com/books";
	var bookStore = [];
	var $bookList = $('#book-list');

	//compile handlebars template
	var source = $('#book-template').html();
	var template = Handlebars.compile(source);

	function addBookToPage() {
		document.getElementById('bookForm').reset();
		//clear form
		var bookHtml = template({book: bookStore});
		$bookList.append(bookHtml);
		}
		$.get(booksUrl, function(data){
			bookStore = data.book;
			addBookToPage();
		});
		$('form').on('submit', function(event){
			event.preventDefault();
			var addedBook = $(this).serialize();
			$.post(booksUrl, addedBook, function(newbook){
				bookStore.push(newbook);
				//add new book to bookStore & updates page
				addBookToPage();
			});
		});
	});


	