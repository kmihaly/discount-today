declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      fill?: string;
      height?: string;
      title?: string;
      viewbox?: string;
    }
  >;

  export default ReactComponent;
}
