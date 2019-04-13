// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-played").on("click", function(event) {
      var id = $(this).data("id");
  
      // For played button update played boolean.
      $.ajax("/api/played/" + id, {
        type: "PUT"
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newCourse = {
        name: $("#courseName").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/courses", {
        type: "POST",
        data: newCourse
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  