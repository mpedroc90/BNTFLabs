function UpdateFormComponent(userModule){
   let customId;
  return {
    showForm(id) {
      customId=id;
      userModule.getUser(id, function(user) {
        $("input[name=phone]").val(`${user.phone}`);
        $("input[name=email]").val(`${user.email}`);
        $("textarea[name=address]").val(user.address);
       // $("#form").attr("action", id);
        $("#form-error").addClass("d-none");
        $("#updatemodal").modal();
      });
    }, 

    update() {
      userModule.updateUser(customId,  {
        phone : $("input[name=phone]").val(),
        email: $("input[name=email]").val(),
        address: $("textarea[name=address]").val()
      });
    }
  }
}