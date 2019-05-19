function TableComponent(userModule) {
  updateForm = UpdateFormComponent(userModule);
  viewProfile = ProfileComponent(userModule);

  function getId(object) {
    const tr = $(object).closest("tr");
    return tr.attr("user-id");
  }

  return {
    init() {
        $(".delete").click(function(e) {
          e.preventDefault();
          userModule.deleteUser(getId(this));
        });

        $(".view").click(function(e) {
          e.preventDefault();
          const id = getId(this);
          viewProfile.showProfile(id);
        });
  
  
        $(".update").click(function(e) {
          e.preventDefault();
          const id = getId(this);
          updateForm.showForm(id);
        });

        $("#update").click(function(e) {
          e.preventDefault();
          updateForm.update();
        });
    }
  }
}