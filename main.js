$(function(){
	
	// base API Route
	var baseUrl= "https://super-crud.herokuapp.com/books";
	
	// array to hold book data from API
	var bookStore = [];

	// element to display list of books
	var $booksList = $('#book-list');

	// form to create new book
	var $createBook = $('#create-book');

	//compile handlebars template
	var source = $('#book-template').html();
	var template = Handlebars.compile(source);


	// helper function to render all books to view
	var render = function (){
		// empty existing books from view
		$booksList.empty();

		// pass 'allBooks' into the template function
		var booksHTML = template({ books: allBooks});

		// append html to the view
		$booksList.append(booksHTML);
	};

	// GET all books on the page load
	$.get(baseUrl, function(data){
		console.log(data);

	// set 'allBooks' to the book data from API
	allBooks = data.books;

	// render all the books to view
	render();
	});




});