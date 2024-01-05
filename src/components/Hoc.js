const Hoc = ({ Component }) => {
  Hoc.displayName = "notHoc";
  return (
    <Component
      render={(sum1, sum2) => {
        return (
          <h1 onClick={() => console.log(sum1, sum2)}>
            {sum1}+{sum2}={sum1 + sum2}
          </h1>
        );
      }}
    ></Component>
  );
};

export default Hoc;
