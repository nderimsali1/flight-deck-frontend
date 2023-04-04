import { SSTConfig } from "sst";
import { TaroxEvaluation } from "./stacks/tarox-evaluation";

export default {
  config(_input) {
    return {
      name: "tarox-evaluation-app",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(TaroxEvaluation);
  },
} satisfies SSTConfig;
