var s = document.createElement("script");
s.src = chrome.extension.getURL("script.js");
s.onload =  function() {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);

var temp_cell_toggle = false;
var temp_cell = document.createElement("div");

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
	var container = document.getElementById("notebook-container");
	if(request.toggle == true) {
		if (temp_cell_toggle == false) {
			temp_cell = document.createElement("div");
			temp_cell.className = "output_wrapper";
			temp_cell.id = "temp_cell";
			temp_cell_toggle = true;
			container.appendChild(temp_cell);
		} else {
			container.removeChild(temp_cell);
			temp_cell_toggle = false;
		}
	}
});
