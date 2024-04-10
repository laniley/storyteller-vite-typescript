export function getRoute(state:Project) {

	if (!state) return;

	return getSubRoute(state.route);
}

function getSubRoute(current_route_object:{current:string}) {
	/*
	if (current_route_object && current_route_object.current) {

		route_string += "/" + current_route_object.current;

		if (current_route_object[current_route_object.current]) {

			route_string += getSubRoute(current_route_object[current_route_object.current]);
		}
	}

	return route_string;
	*/
	return ""
}