import Link from "./Link";

const Header = ({ data }) => {
  return (
    <div className="header">
      <div className="linkList">
        {data.map((item, i) => (
          <Link key={i}>{item}</Link>
        ))}
      </div>
    </div>
  );
};
export default Header;
