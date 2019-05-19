function UserModule(options) {
  function validateUser(user) {
    console.log(user);
    const errors = [];

    if (!user.phone || $.trim(user.phone) == "") {
      errors.push({ field: "phone", message: "El telefono es requerido" });
    }

    if (!user.address || $.trim(user.address) == "") {
      errors.push({ field:"address", message:"La dirección es requerida"});
    }

    if (!user.email || $.trim(user.email) == "") {
      
      errors.push({ field:"email", message:"El email  es requerido"});
    }
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
      errors.push({ field:"email", message:"El email  es inv&aacute;lido"});
    }
    
    return errors;
  }

  return {
    getUser: function(id, callback) {
      $.get("/" + id, callback);
    },
    deleteUser: function(id) {
      $.ajax({
        url: `/${id}`,
        method: "DELETE",
        success: function() {
          options.ondelete && options.ondelete(id);
        },
      });
    },
    updateUser: function(id, body) {
      options.updating && options.updating()
      const errors = validateUser(body);
      if (errors.length !== 0) {
        options.onvalidateUpdate && options.onvalidateUpdate(errors);
        return;
      }

      $.post(`/${id}`, body, function(data) {
        options.onupdate && options.onupdate(data);
      });
    },
  };
}
