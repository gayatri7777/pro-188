AFRAME.registerComponent("markerhandler",{
    init: async function (){

        this.el.addEventListener("markerFound",() => {
            console.log("marker is found")
            this.handleMarkerLost();

        });

        this.el.addEventListener("markerLost", () => {
            console.log("marker is lost")
            this.handleMarkerLost();

        });

    },
    handleMarkerLost: function(){
        // Chnaging button div visiblity
        var buttoonDiv = document.getElementById("button-div");
        buttoonDiv.style.display = "flex";

        var ratingButton = document.getElementById("ratting-button");
        var orderButton = document.getElementById("order-button");

        //Handling click Events
        ratingButton.addEventListener("click", function(){
            swal ({
                icon: " warning",
                title: "Rate Dish!",
                text: "Work In Progress"


            });

        });

        orderButton.addEventListener("click",() => {
            swal ({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Order!",
                text: "Your order will be served soon at your table!"

            });



        });
    },
    
    handleMarkerLost: function(){
        // Changing button div visiblity
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})