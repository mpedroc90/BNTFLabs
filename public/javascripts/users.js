function UserModule(options) {
  return {
    getUser: function(id, callback) {
      $.get("/" + id, callback);
    },

    deleteUser: function(id, callback) {
      $.ajax({
        url: `/${id}`,
        method: "DELETE",
        success: callback,
      });
    },
    updateUser: function(id, body, callback) {
      $.post(`/${id}`, body, callback);
    },
  };
}
