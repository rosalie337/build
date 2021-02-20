import { useState } from "react";
import Display from "./Display";
import React from "react";

const StopLight = () => {
  const sequences = {
    stop: { red: true, yellow: false, green: false, next: "go" },
    go: { red: false, yellow: false, green: true, next: "slow" },
    slow: { red: false, yellow: true, green: false, next: "stop" }
  };

  const [sequence, setSequence] = useState(sequences.stop);

  return (
    <Display
      {...sequence}
      onClick={() => setSequence(sequences[sequence.next])}
    />
  );
};

export default StopLight;
