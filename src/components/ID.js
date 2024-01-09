import { useParams } from "react-router-dom";

const ID = () => {
  const { id } = useParams();

  console.log(id);
  return <>IDpage</>;
};
export default ID;
