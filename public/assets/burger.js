// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
    $(".change-status").on("click", (event) => {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");

        const newDevouredState = {
            status: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                console.log("changed status to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger-name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
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