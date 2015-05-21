// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	// creates var for resultsDIV and sets it to document id results
    var resultsDIV = document.getElementById("results"),
		//creates an array for searchInput
        searchInput = document.forms[0].search,
		//creates var currentSearch and sets it to undefined
        currentSearch = ''
	;

	// Validates search query
	//creates var validate and sets it to function
    var validate = function(query){  //To many ==, and validate spelled wrong

		// Trim whitespace from start and end of search query
		while(query.charAt(0) == " "){ //== not =
			// takes the first character for the query as well as the query length
            query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);
        }; //missing }

		// Check search length, must have 3 characters
            //alerts user if query is too small with an alert box
            if(query.length < 3){
			alert("Your search query is too small, try again."); //" missing at end of string for alert

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		//search query
		search(query);
	};

	// Finds search matches
    // creates var search and sets it to function
	var search = function(query){ //missing {

		// split the user's search query string into an array
		var queryArray = query.split(" "); //split not join

		// array to store matched results from database.js
        //creates var for results and sets it to an array
		var results = [];

		// loop through each index of db array
		//loops through the db array indexes
        for(var i=0, j=db.length; i<j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd); //forgot camel casing

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qItem = queryArray[ii].toLowerCase(); //forgot camel casing

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(qItem); //forgot camel casing
                if (compare !== -1) {
                    results.push(db[i]);
                }
                ;
            }; //forgot }
        }; //forgot }
		//sorts results
		results.sort();

		// Check that matches were found, and run output functions
		if(results.length === 0){ //=== not =
			noMatch();
		}else{
			//shows matches and results
            showMatches(results);
		};
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
            //tells user there are no results for their search
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
        //creates var html and sets it to a string
		var html = '<p>Results</p>',
			//declares var
            title,
            //declares var
			url
		;

		// loop through all the results search() function
        for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd); //substring does not need to be camel cased

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validate(query); //validate spelled incorrectly

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        //returns false if not true
        return false;
    }; // missing }

})();

