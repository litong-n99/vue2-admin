import App from "./App";
import Dashboard from "./Dashboard";
import User from "./User";

export * as ModelUtil from "./ModelUtil";

const Models = {
  app: App.instance,
  user: User.instance,
  dashboard: Dashboard.instance,
};

export type ModelsKey = keyof typeof Models;

export default Models;
