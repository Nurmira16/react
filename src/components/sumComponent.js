import { useState } from "react";

const SumComponent = ({ render }) => {
  const [sum1, setSum1] = useState(1);
  const [sum2, setSum2] = useState(8);
  return render(sum1, sum2);
};
export default SumComponent;
