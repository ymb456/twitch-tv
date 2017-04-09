var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
$(document).ready(function() {
    debugger;

    var activeLines = "";
    var offlineLines = "";
    channels.forEach(function(channel) {
        $.getJSON({
            url: "https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?",
            dataType: "jsonp",
            success: function(result) {
                if (result.stream === null) {
                    $.getJSON({
                        url: "https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?",
                        dataType: "jsonp",
                        success: function(result) {
                            offlineLines += '<div class="row row-offline">    <div class="test col-xs-2">      <img id="img1" class="img-responsive img-border" src="' + result.logo + '">    </div>    <div class="test col-xs-2">      <div class = "text-info text-offline">      <a class="text-offline" href="' + result.url + '" target="_blank">' + result.display_name + '</a>      </div>    </div>    <div class="test col-xs-8">      <div class = "text-info text-offline">      <i id="txt1">' + "Status: Offline" + '</i></div></div></div>';
                            $("#offline").html(offlineLines);
                        }
                    });
                } else if (result.stream === undefined) {
                    $.getJSON({
                        url: "https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?",
                        dataType: "jsonp",
                        success: function(result) {
                            offlineLines += '<div class="row row-offline">    <div class="test col-xs-2">      <img id="img1" class="img-responsive img-border" src="' + result.logo + '">    </div>    <div class="test col-xs-2">      <div class = "text-info text-offline">      <a class="text-offline" href="' + result.url + '" target="_blank">' + channel + '</a>      </div>    </div>    <div class="test col-xs-8">      <div class = "text-info text-offline">      <i id="txt1">' + "Status: Closed" + '</i></div></div></div>';
                            $("#offline").html(offlineLines);
                        }
                    });
                } else {
                    $.getJSON({
                        url: "https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?",
                        dataType: "jsonp",
                        success: function(result) {
                            activeLines += '<div class="row row-active">    <div class="test col-xs-2">      <img id="img1" class="img-responsive img-border" src="' + result.logo + '">    </div>    <div class="test col-xs-2">      <div class = "text-info text-online">      <a class="active-text" href="' + result.url + '" target="_blank">' + result.display_name + '</a>      </div>    </div>    <div class="test col-xs-8">      <div class = "text-info text-online">      <i id="txt1">' + result.game + ": " + result.status + '</i></div></div></div>';
                            $("#active").html(activeLines);
                        }
                    });
                }




            }
        });


    });

});
