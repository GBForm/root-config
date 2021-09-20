import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@built/loan-application",
  app: () => System.import("@built/loan-application"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@built/success",
  app: () => System.import("@built/success"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@built/api",
  app: () => System.import("@built/api"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
