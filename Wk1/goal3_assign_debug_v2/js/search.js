// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    //creates var for resultsDIV and set it to doc.get
	var resultsDIV = document.getElementById("results"),
        //var for searchInput and sets to doc.forms
		searchInput = document.forms[0].search,
        //var for currentSearch
		currentSearch = ''
	;
	
	// Validates search query
    //creates var for validgte and sets to function call (query)
	var validqte == function(query){
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){
        }
            //alerts user if query is too small and asks them to try again
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		
		search(query);
	};
	
	// Finds search matches
    //creates var search and sets it to function call (query)
	var search = function(query)
		
		// split the user's search query string into an array
        //creates var queryArray and sets to query.join
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
        //creates var results and sets to array
		var results = [];

		// loop through each index of db array
        //creates for loop and sets var
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
            //creates var dbTitleEnd
			var dbTitleEnd = db[i].indexOf('|');
            //creates var dbitem
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
            //creates for and sets var
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){

                //creates var gitem and sets to queryArray
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
                //creates var compare and sets to dbitem.indexOf
				var compare = dbitem.indexOf(qitem);
                //creates if
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
    //creates var noMatch and sets to function
	var noMatch = function(){
        //creates var html
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
    //creates var showMatches and   sets it to function call (results)
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
        //creates var html and sets it to <p></p>
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
        //creates for loop and creates var
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();