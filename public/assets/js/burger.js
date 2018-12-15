// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {

    $(() => {
        $(".devour").on("click", (event) => {
            let id = $(this).data("id");

            let isEaten = {
                devoured = true
            };

            // Send the PUT request.
            $.ajax("/api/burger/" + id, {
                type: "PUT",
                data: isEaten
            }).then(
                () => {
                    console.log("changed status to", isEaten);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        $(".new-burger").on("submit", (event) => {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            let newBurger = {
                name: $("#new-burger").val().trim(),
            };

            // Send the POST request.
            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(
                () => {
                    console.log("created new burger, captain");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        $(".delete-burger").on("click", (event) => {
            let id = $(this).data("id");

            // Send the DELETE request.
            $.ajax("/api/burger/" + id, {
                type: "DELETE"
            }).then(
                () => {
                    console.log("deleted burger", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
    });
})