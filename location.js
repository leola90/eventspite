window.app = { location :''};

(function(){
    var settings = {
        "url": "https://freegeoip.app/json/",
        "method": "GET",
        "timeout": 0,
        };
    
        $.ajax(settings).done(function (response) {
            console.log(response.ip);
            var ipAddress = response.ip;
        
            var queryURL = 'http://api.ipstack.com/' + ipAddress + '?access_key=1d9caf0d18492415cbdbea74d0036473'
            var settings = {
                "url": queryURL,
                "method": "GET",
                "timeout": 0,
            };

            $.ajax(settings).done(function (respone) {
                console.log(response.city);
                window.app.location = response.city;
            });
        });
})()
