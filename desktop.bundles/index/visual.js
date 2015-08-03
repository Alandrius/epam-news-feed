"use strict";


var apiKey = 'f912ba5a2e81ac301041cfbeb8728a69:2:72557579';
var itemsPerPage = 10;

// className (string) - class name of the icon to attach click event listener
// isHaze (boolean) - if haze is used whith opened window 
// windowClassName (string) - window's that must be opened class name
// isSearch (boolean) - if search icon clicked then must make a request instead of window opening 
function Icon (className, windowClassName, isHaze, isSearch) {

	this.className = className;
	this.windowClassName = windowClassName;
	this.isHaze = isHaze;
	this.isSearch = isSearch;
	
	this.page = 1;
	
	this.initialize();
	
}

//Adds icons click event handlers
Icon.prototype.initialize = function () {


	var icons = document.querySelectorAll(this.className);
	
	var _this = this;

	for (var i = 0; i < icons.length; i++) {
		
		icons[i].onclick = function () {
			
			
			if (_this.isSearch){
				var searchString = document.querySelectorAll('.search__search-input input');
				for (var i = 0; i < searchString.length; i++) {
					var input = searchString[i].value.trim();
					if(input !== '')
						_this.makeQuery(input);
				}
				_this.make
			}
			else if (_this.isHaze)
				_this.toggleWithHaze(_this.windowClassName, this, _this);
			else
				_this.toggle(_this.windowClassName, this);
			
		}
	}


}

//Toggle appropriate window
Icon.prototype.toggle = function (el, icon) {

	var elements;

	elements = document.querySelectorAll(el);



	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = (elements[i].style.display == 'none' || elements[i].style.display == '') ? 'block' : 'none';
		if(icon !== undefined)
			icon.style.opacity = (elements[i].style.display == 'none' || elements[i].style.display == '') ? '1' : '0.5';
	}

}


//Toggle appropriate window and haze
Icon.prototype.toggleWithHaze = function (el, icon, _this) {

	_this.toggle(el, icon);
	_this.toggle('.haze');

}

Icon.prototype.createQueryLink = function (input) {
	input = input.replace(/\s/g, '+');
	return 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + input + '&page=' + this.page + '&sort=newest&api-key=' + apiKey;
}

//Make query to New York Times API
Icon.prototype.makeQuery = function (input) {
	
	if(input != this.input)
		this.page = 1;
	
	this.input = input;
	
	var xmlhttp = new XMLHttpRequest();
	var url = this.createQueryLink(input);
	var _this = this;
	
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			_this.outputToFeed(data.response.docs);
		}
		else
			_this.outputToFeed();
	}
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}


//Output news to feed
Icon.prototype.outputToFeed = function (data) {
	
	
	var newsFeed = document.querySelectorAll('.news-feed');
	for (var i = 0; i < newsFeed.length; i++) {
		
		if(data !== undefined && data.length > 0) {
			
			removeElementById('error');

			for (var j = 0; j < data.length; j++) {
				console.log(data[j]);
				var newDiv = document.createElement('div');
				newDiv.className = 'news-feed__item';
				newDiv.setAttribute("data-id", data[j]._id);
				if(data[j].multimedia.length > 0)
					newDiv.innerHTML = '<img src="http://nytimes.com/' + data[j].multimedia[0].url + '" alt="' + data[j].headline.main + '"><p class="news-feed__title">' + data[j].headline.main + '</p>';
				else
					newDiv.innerHTML = '<div class="no-photo" >No photo</div><p class="news-feed__title">' + data[j].headline.main + '</p>';
				
				
							
				var _this = this;
				
				//Click to news item event handler
				newDiv.onclick = function(){
					var id = this.getAttribute('data-id');
					for (var j = 0; j < data.length; j++) {
						if(data[j]._id == id){
							var modal = document.querySelectorAll('.modal-window__content');
							modal = modal[0];
							modal.innerHTML = '<h1>' + data[j].headline.main + '</h1><p><img src="http://nytimes.com/' + data[j].multimedia[0].url + '" alt="' + data[j].headline.main + '" align="left">' + data[j].lead_paragraph + '</p>'
							
							
							
						}
					}
					
					var haze = document.getElementsByClassName('haze');
					haze[0].style.display = 'block';
					_this.toggle('.modal-window');
					
					
				}
				
				newsFeed[i].appendChild(newDiv);
				
				
				
			}

		}
		else
			newsFeed[i].innerHTML = '<span id="error">Your search did not match any documents</span>';
		
	}
	

}

//Removes DOM element by its id
function removeElementById(id) {
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}


window.onload=function(){
	
	//icon to open collapsed mobile search window
	var searchIco = new Icon('.search-ico', '.search', false, false);
	
	//icon to open collapsed mobile menu window
	var menuIco = new Icon('.menu-ico', '.menu-top', true, false);
	
	//icon to make a search
	var menuIco = new Icon('.search__search-input button', '' , false ,true);
	
	//icon to close modal window
	var menuIco = new Icon('.modal-window .close-ico', '.modal-window', true, false);
	

};




