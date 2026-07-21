//#region \0%23tanstack-start-server-fn-resolver
var manifest = { "d27e2b5edd646a3f296603629d7f2132a415f70ee2b08aae8610bd7a8ba35d4b": {
	functionName: "sendRsvpEmail_createServerFn_handler",
	importer: () => import("./rsvp-email-Cr9Paa-u.js")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
