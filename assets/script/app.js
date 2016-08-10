// Initial movie buttons.
var movies = ['Finding Nemo', 'The Incredibles', 'Cars', 'Shrek', 'Frozen', 'Monsters, Inc.', 'Tangled', 'The Lion King', 'Toy Story']


$('button').on('click', function() {
        var movie = $(this).data('movie');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                console.log(queryURL);

                console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                //------------put step 2 in between these dashes--------------------
                var results = response.data;
                //--------------------------------

                       for (var i = 0; i < results.length; i++) {

                    /* step 3: 
                        * uncomment the for loop above and the closing curly bracket below
                        * make a div and reference it in a variable named animalDiv
                        * make a paragraph tag and put it in a variable named p
                            * set the text of the paragraph to the rating of the image in results[i]
                        * make an image and reference it in a variable named animalImage
                        * set the image's src to results[i]'s fixed_height.url 

                        * append the p variable to the animalDiv variable
                        * append the animalImage variable to the animalDiv variable

                        * prepend the animalDiv variable to the element with an id of gifsAppearHere

                    */

                    //------------put step 3 in between these dashes--------------------
                    var animalDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $('#gifsAppearHere').prepend(animalDiv);
                    //--------------------------------
                }

            });
    });
    

// displayMovieInfo function now re-renders the HTML to display the appropriate content. 
/*	function displayMovieInfo(){

		var movie = $(this).attr('data-name');
		var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
		
		// Creates AJAX call for the specific movie being 
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			// Creates a generic div to hold the movie
			var movieDiv = $('<div class="movie">');

			// Retrieves the Rating Data
			var rating = response.Rated;

			// Creates an element to have the rating displayed
			var pOne = $('<p>').text( "Rating: " + rating);

			// Displays the rating
			movieDiv.append(pOne);

			// Retrieves the release year
			var released = response.Released;

			// Creates an element to hold the release year
			var pTwo = $('<p>').text( "Released: " + released);

			// Displays the release year
			movieDiv.append(pTwo);

			// Retrieves the plot
			var plot = response.Plot;

			// Creates an element to hold the plot
			var pThree = $('<p>').text( "Plot: " + plot);

			// Appends the plot
			movieDiv.append(pThree);

			// Creates an element to hold the image 
			var image = $('<img>').attr("src", response.Poster);

			// Appends the image
			movieDiv.append(image);

			// Puts the entire Movie above the previous movies.
			$('#moviesView').prepend(movieDiv);
		});

	}

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#buttonsView').empty();

		// Loops through the array of movies
		for (var i = 0; i < movies.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('movie'); // Added a class 
		    a.attr('data-name', movies[i]); // Added a data-attribute
		    a.text(movies[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addMovie').on('click', function(){

		// This line of code will grab the input from the textbox
		var movie = $('#movie-input').val().trim();

		// The movie from the textbox is then added to our array
		movies.push(movie);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the movieInfo
	$(document).on('click', '.movie', displayMovieInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons(); */