(function () {
	WebSocket.prototype._send = WebSocket.prototype.send;
	WebSocket.prototype.send = function (data) {
		this._send(data);
		this.addEventListener('message', function (msg) {
			parseWS(msg.data);
		}, false);
		this.send = function (data) {
			this._send(data);
			parseWS(data);
		};
		parseWS(data);
	}
})()

var buffer = "";

function addToCell(temp_cell, str){
	//TODO addicional logic rather than just replacing the content of the cell
	buffer = str.replace(/.?\x08/g, "");

	temp_cell.innerHTML = '<div class="out_prompt_overlay prompt" title="click to scroll output; double click to hide" style=""></div><div class="output" style=""><div class="output_area"><div class="prompt"></div><div class="output_subarea output_text output_stream output_stdout"><pre>'+ buffer  +'</pre></div></div></div><div class="btn btn-default output_collapsed" title="click to expand output" style="display: none;">. . .</div>'
}

function parseWS(data){
	var temp_cell = document.getElementById("temp_cell");
	if (temp_cell){
		parsed = JSON.parse(data);
		if (parsed.content) {
			if (parsed.content.text) {
				addToCell(temp_cell, parsed.content.text);
			}
		}
	}
}
