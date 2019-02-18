// To run on command line:
// node robot.js

function route(str) {
    var routes = str.split("\n");

    for (var i = 0; i < routes.length; i++) {
        var position = [0, 0];
        var orientation = "West";
        var routeInfo = routes[i].split("; ");
        var route = routeInfo[2].split(",");

        for (var j = 0; j < route.length; j++) {
            orientation = orient(orientation, route[j]);
            position = move(position, orientation, route[j]);
        }

        console.log(routeInfo[0] + "; " + routeInfo[1] + "; " + bestRoute(position));
    }
}

function orient(orientation, action) {
    if (orientation == "North") {
        if (action.charAt(0) == 'L') { orientation = "West"; } else { orientation = "East"; }
    } else if (orientation == "South") {
        if (action.charAt(0) == 'L') { orientation = "East"; } else { orientation = "West"; }
    } else if (orientation == "East") {
        if (action.charAt(0) == 'L') { orientation = "North"; } else { orientation = "South"; }
    } else if (orientation == "West") {
        if (action.charAt(0) == 'L') { orientation = "South"; } else { orientation = "North"; }
    }

    return orientation;
}

function move(position, orientation, action) {
    if (orientation == "North") { position[1] += parseInt(action.charAt(1)); }
    else if (orientation == "South") { position[1] -= parseInt(action.charAt(1)); }
    else if (orientation == "East") { position[0] += parseInt(action.charAt(1)); }
    else if (orientation == "West") { position[0] -= parseInt(action.charAt(1)); }

    return position;
}

function bestRoute(destination) {
    var route;

    if (destination[0] >= 0 && destination[1] >= 0) { route = "R" + destination[1].toString() + ",R" + destination[0].toString(); }
    else if (destination[0] < 0 && destination[1] >= 0) { route = "R" + destination[1].toString() + ",L" + abs(destination[0].toString()); }
    else if (destination[0] >= 0 && destination[1] < 0) { route = "L" + abs(destination[1].toString()) + ",L" + destination[0].toString(); }
    else if (destination[0] < 0 && destination[1] < 0) { route = "L" + abs(destination[1].toString()) + ",R" + abs(destination[0].toString()); }

    return route;
}

route("2017-01-01; CoffeeShop; L2,L5,L5,R5,L2\n2017-01-02; Advertising Agency; R3,R3,R3,L2");