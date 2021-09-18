import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@built/loan-application",
//   app: () => System.import("@built/loan-application"),
//   activeWhen: ["/"]
// });
// registerApplication({
//   name: "@built/success",
//   app: () => System.import("@built/success"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
