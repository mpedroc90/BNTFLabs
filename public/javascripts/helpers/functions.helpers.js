

function showInfo(message) {
  var number = Math.floor(Math.random()) * 1000;
  var body = `<div id="alert-${number}" class="alert alert-info fade show alert-dismissible" role=alert>
                    ${message}
              <button type="button" class="close" arial-label="Cerrar" data-dismiss="alert"><span aria-hidden=true>&times;</span></button>
            </div>`;

  $("#alert-info").append(body);
  setTimeout(() => $(`#alert-${number}`).alert("close"), 2000);
}
