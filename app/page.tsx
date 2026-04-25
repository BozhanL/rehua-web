import type { JSX } from "react";
import { functional } from "typia";

function Home(): JSX.Element {
  return <h1>Hello world</h1>;
}

export default functional.assertFunction(Home);
