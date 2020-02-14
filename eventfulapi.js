
$(document).ready(function() {
   
    function userInput () {
        $(".btn-search").on("click", function(event) {
            $("#home").hide();
            $("#search-input").hide();
            $("#footer").hide();
            $(".btn-search").hide();
           
            var start = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 10 ? '0':''}${new Date().getMonth() + 1}${new Date().getDate()}00`;
            var end = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 10 ? '0':''}${new Date().getMonth() + 1}${new Date().getDate() + 7}00`;
            var keywords = $("#search-input").val();
            localStorage.setItem('keywords', keywords);

            var settings = {
                url: "https://api.eventful.com/json/events/search?&app_key=3PCFhKqWmgV9xscv&date="+ start + "-" + end + "&sort_direction=ascending&keywords=" + keywords + "&location=houston",
                method: "GET",
                timeout: 0,
            };

            $.ajax(settings).done(function (response) {
            console.log(response);
           
                // Create a for loop to dynamically inject the elements to the page
                for(var ev of response.events.event){
                //Creating variables to store data
                var imgURL = "https://placehold.it/100x100";
                var title = ev.title;
                var city = ev.city_name;
                var state = ev.region_name;
                var date = new Date(ev.start_time).toLocaleString();
                var venueName= ev.venue_name;
                var venueAddress = ev.venue_address;

                // Call for a `` to attach my variables. In this case, I called for a var name template.
                var template = `
                <div class="card-body">
                    <div class="card-title" id="header">${title}</div>
                    <div class="card-img-top" id="bio-image"></div>
                    <img src="${imgURL}"/>
                    <div class="bottom-text"></div>
                    <div id="date">${date}</div>
                    <div id="location">${city}, ${state}</div>
                    <a href="#" class="card-link" id="directions">${venueAddress}</a>
                    <a href="#" class="card-link" id="siteURL">${venueName}</a>
                </div>`;

                // Append all this to row inside the container
                $(".row").append(template);
            };

                $("#next-btn").show();
                $("#previous-btn").show();
                $("#reset-btn").show();
                
            });
        });
    };

    function nextDeck () {
        $("#next-btn").on("click", function() {
            $("#next-btn").hide();
            $("#previous-btn").hide();
            $("#reset-btn").hide();
            var startNext = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 10 ? '0':''}${new Date().getMonth() + 1}${new Date().getDate() + 7}00`;
            var endNext = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 10 ? '0':''}${new Date().getMonth() + 1}${new Date().getDate() + 7}00`;
            var keywords = localStorage.getItem('keywords');
            
            var settings = {
                url: "https://api.eventful.com/json/events/search?&app_key=3PCFhKqWmgV9xscv&date="+ startNext + "-" + endNext + "&sort_direction=ascending&keywords=" + keywords + "&location=houston",
                method: "GET",
                timeout: 0,
            };
            
            $.ajax(settings).done(function (response) {
            console.log(response);
            $(".row").html("");
                
            // Create a for loop to dynamically inject the elements to the page
            for(var ev of response.events.event){
                //Creating variables to store data
                var imgURL = "https://placehold.it/100x100";
                var title = ev.title;
                var city = ev.city_name;
                var state = ev.region_name;
                var date = new Date(ev.start_time).toLocaleString();
                var venueName= ev.venue_name;
                var venueAddress = ev.venue_address;
                
                // Call for a `` to attach my variables. In this case, I called for a var name template.
                var template = `
                    <div class="card-body">
                    <div class="card-title" id="header">${title}</div>
                    <div class="card-img-top" id="bio-image"></div>
                    <img src="${imgURL}"/>
                    <div class="bottom-text"></div>
                    <div id="date">${date}</div>
                    <div id="location">${city}, ${state}</div>
                    <a href="#" class="card-link" id="directions">${venueAddress}</a>
                    <a href="#" class="card-link" id="siteURL">${venueName}</a>
                    </div>`;
                
                // Append all this to row inside the container
                $(".row").append(template);

                $("#next-btn").show();
                $("#previous-btn").show();
                $("#reset-btn").show();
            };
            });
            
        });
    };

    function previousDeck () {
        $("#previous-btn").on("click", function() {
            $("#next-btn").hide();
            $("#previous-btn").hide();
            $("#reset-btn").hide();
            var startLast = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 10 ? '0':''}${new Date().getMonth() + 1}${new Date().getDate() - 7}00`;
            var endLast = `${new Date().getFullYear()}${new Date().getMonth() + 1 < 10 ? '0':''}${new Date().getMonth() + 1}${new Date().getDate() + 7}00`;
            var keywords = localStorage.getItem('keywords');

            var settings = {
                url: "https://api.eventful.com/json/events/search?&app_key=3PCFhKqWmgV9xscv&date="+ startLast + "-" + endLast + "&sort_direction=ascending&keywords=" + keywords + "&location=houston",
                method: "GET",
                timeout: 0,
            };

            
            $.ajax(settings).done(function (response) {
                console.log(response);
                $(".row").html("");

                    // Create a for loop to dynamically inject the elements to the page
                    for(var ev of response.events.event){
                    //Creating variables to store data
                    var imgURL = "https://placehold.it/100x100";
                    var title = ev.title;
                    var city = ev.city_name;
                    var state = ev.region_name;
                    var date = new Date(ev.start_time).toLocaleString();
                    var venueName= ev.venue_name;
                    var venueAddress = ev.venue_address;
    
                    // Call for a `` to attach my variables. In this case, I called for a var name template.
                    var template = `
                    <div class="card-body">
                        <div class="card-title" id="header">${title}</div>
                        <div class="card-img-top" id="bio-image"></div>
                        <img src="${imgURL}"/>
                        <div class="bottom-text"></div>
                        <div id="date">${date}</div>
                        <div id="location">${city}, ${state}</div>
                        <a href="#" class="card-link" id="directions">${venueAddress}</a>
                        <a href="#" class="card-link" id="siteURL">${venueName}</a>
                    </div>`;
    
                    // Append all this to row inside the container
                    $(".row").append(template);

                    $("#next-btn").show();
                    $("#previous-btn").show();
                    $("#reset-btn").show();
                    };
            });

        });
    };

    function homeDeck() {
        $("#reset-btn").on("click", function() {
            $(".row").html("");
            $("#home").show();
            $("#search-input").show();
            $("#footer").show();
            $(".btn-search").show();
            $("#next-btn").hide();
            $("#previous-btn").hide();
            $("#reset-btn").hide();
        });    
    };

    userInput();
    nextDeck();
    previousDeck();
    homeDeck();
});
        
        












