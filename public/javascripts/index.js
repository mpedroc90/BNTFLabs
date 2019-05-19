$(function() {

  userModule = UserModule();
  customGraphModule = CustomChartModule();
  
  function getId(object) {
    const tr = $(object).closest("tr");
    return tr.attr("user-id");
  }

  $(".delete").click(function(e) {
    e.preventDefault();
    const tr = $(this).closest("tr");
    userModule.deleteUser(getId(this), function() {
      tr.remove();
      showInfo("El usuario se ha eliminado correctamente");
    });
  });

  $(".view").click(function(e) {
    e.preventDefault();
    $("#image_profile").attr(
      "src",
      "data:image/png;base64,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"
    );

    const id = getId(this);
    userModule.getUser(id, function(user) {
      $("#name").html(`${user.name} ${user.lastname}`);
      $("#rut").html(`${user.rut}`);
      $("#age").html(`${user.age}`);
      $("#phone").html(`${user.phone}`);
      $("#address").html(`${user.address}`);
      $("#email").html(`${user.email}`);
      $("#name").html(`${user.name} ${user.lastname}`);

      if (!!user.image_profile){
        $("#image_profile").attr("src", user.image_profile);
      }
      
      var ctx = document.getElementById("myChart").getContext("2d");
      customGraphModule.create(ctx,user.skills);
      
      $("#viewmodal").modal();
    });
  });

  $(".update").click(function(e) {
    e.preventDefault();
    const id = getId(this);
    userModule.getUser(id, function(user) {
      $("input[name=phone]").val(`${user.phone}`);
      $("input[name=email]").val(`${user.email}`);
      $("textarea[name=address]").val(user.address);
      $("#form").attr("action", id);
      $("#form-error").addClass("d-none");
      $("#updatemodal").modal();
    });
  });

  $("#update").click(function(e) {
    e.preventDefault();
    const form = document.getElementById("form");
    const errors = [];

    for (element of form.elements) {
      if ($(element).is("[data-required]") && !$(element).val()) {
        errors.push($(element).attr("data-required"));
        $(element).addClass(".error");
      }

      if (
        $(element).is("[data-email]") &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test($(element).val())
      ) {
        errors.push($(element).attr("data-email"));
        $(element).addClass(".error");
      }
    }

    if (errors.length === 0) {
      $("#form-error").addClass("d-none");
      
      userModule.updateUser($(form).attr("action"), $(form).serialize(), function(user) {
        $(`#email-${user.id}`).html(user.email);
        $("#updatemodal .close-modal").click();
        showInfo("El usuario se ha modificado correctamente.");
      });
    
    } else {
      let html = "<ul>";

      for (error of errors) html += `<li>${error}</li>`;
      html += "</ul>";

      $("#form-error").html(html);
      $("#form-error").removeClass("d-none");
    }
  });

  function showInfo(message) {
    var number = Math.floor(Math.random()) * 1000;
    var body = `<div id="alert-${number}" class="alert alert-info fade show alert-dismissible" role=alert>
                      ${message}
                <button type="button" class="close" arial-label="Cerrar" data-dismiss="alert"><span aria-hidden=true>&times;</span></button>
              </div>`;

    $("#alert-info").append(body);
    setTimeout(() => $(`#alert-${number}`).alert("close"), 2000);
  }
});
