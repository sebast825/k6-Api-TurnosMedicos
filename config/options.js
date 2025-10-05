import { healthCheckOptions } from "./healthCheckIOptions.js";
import { loadOptions } from "./loadOptions.js";
import { spikeOptions } from "./spikeOptions.js";
import { stressOptions } from "./stressOptions.js";

export const Options = {
  load: loadOptions,
  spike: spikeOptions,
  stress: stressOptions,
  healthCheck: healthCheckOptions 
};
