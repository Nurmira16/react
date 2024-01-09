import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(-1)}>Helloo</div>;
};
export default AboutPage;
