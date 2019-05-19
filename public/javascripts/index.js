$(function() {
  userModule = UserModule({
    ondelete : function (id) {
      const tr= $(`tr[user-id=${id}]`);
      tr.remove();
      showInfo("El usuario se ha eliminado correctamente");
    }, 

    onupdate: function (user) {
      $(`#email-${user.id}`).html(user.email);
      $("#updatemodal .close-modal").click();
      showInfo("El usuario se ha modificado correctamente.");
    }, 
    
    updating: function(){
      $("#form-error").addClass("d-none");      
    },
    onvalidateUpdate: function(errors){
      let html = "<ul>";
      for (error of errors){ 
          html += `<li>${error.message}</li>`;
      }
      
      html += "</ul>";
      $("#form-error").html(html);
      $("#form-error").removeClass("d-none");      
    }
  });
  TableComponent(userModule).init();
});

