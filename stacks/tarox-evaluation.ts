import { aws_route53 } from "aws-cdk-lib";
import { StackContext, StaticSite } from "sst/constructs";

export function TaroxEvaluation({ stack }: StackContext) {
  new aws_route53.HostedZone(stack, "zone", {
    zoneName: "n.mantaro.dev",
  });

  new StaticSite(stack, "StaticSite", {
    buildOutput: "dist",
    buildCommand: "yarn build-react",
    customDomain: "n.mantaro.dev",
  });
}
