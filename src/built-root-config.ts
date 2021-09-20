import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@built/loan-application",
  app: () => System.import("@built/loan-application"),
  // change this to activeWhen : ["/loan-application"], once routing is figured out
  activeWhen: ["/"],
});
registerApplication({
  name: "@built/success",
  app: () => System.import("@built/success"),
  // change this to activeWhen : ["/success"], once routing is figured out
  activeWhen: ["/"],
});
// registerApplication({
//   name: "@built/api",
//   app: () => System.import("@built/api"),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
