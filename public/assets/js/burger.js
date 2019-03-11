$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devourit").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
        var newDevoured = {
            devoured: 1
        };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("changed newBurger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });