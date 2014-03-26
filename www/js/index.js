/*
 based on demo here: http://www.phonegapessentials.com/content/chapter-19-geolocation-api.html
 more up-to-date info on geolocation here: http://docs.phonegap.com/en/2.4.0/cordova_geolocation_geolocation.md.html
 */

var app = {
    //Location content
    lc: false,

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('refresh_btn').addEventListener('click', this.getLocation, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        //content
        app.lc = document.getElementById("locationInfo");
    },
    // Update DOM on a Received Event
    /*receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },*/
    getLocation: function() {
          alert("getLocation");
          var locOptions = {
            timeout : 5000,
            enableHighAccuracy : true
          };
          //app.lc.innerHTML = JSON.stringify(geolocation);
          //get the current location
          navigator.geolocation.getCurrentPosition(app.onLocationSuccess, app.onLocationError, locOptions);
          //Clear the current location while we wait for a reading
          app.lc.innerHTML = "Reading location...";

      },

    onLocationSuccess: function(loc) {
        alert("onLocationSuccess");
        //We received something from the API, so first get the
        // timestamp in a date object so we can work with it
        var d = new Date(loc.timestamp);
        //Then replace the page's content with the current
        // location retrieved from the API
        app.lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' 
                        + loc.coords.latitude + '<br /><b>Longitude</b>: ' 
                        + loc.coords.longitude + '<br /><b>Altitude</b>: ' 
                        + loc.coords.altitude + '<br /><b>Accuracy</b>: ' 
                        + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' 
                        + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' 
                        + loc.coords.heading + '<br /><b>Speed</b>: ' 
                        + loc.coords.speed + '<br /><b>Timestamp</b>: ' 
                        + d.toLocaleString();
    },

    onLocationError: function(e) {
        alert("Geolocation error: #" + e.code + "\n" + e.message);
        app.lc.innerHTML = JSON.stringify(e);
    }
};
