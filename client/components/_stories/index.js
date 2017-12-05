import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../Sharedy/Button.js";

storiesOf("Button", module)
  .add("Default", () => <Button>Click me!</Button>)
  .add("Icon", () => <Button icon>Click me!</Button>)
  .add("Bordered", () => <Button bordered>Click me!</Button>)
  .add("Clean with Icon", () => (
    <Button clean icon>
      Click me!
    </Button>
  ))
  .add("Clean with theme color (brand)", () => (
    <Button clean color="brand">
      Click me!
    </Button>
  ));
