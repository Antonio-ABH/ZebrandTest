import Navigation from "./Navigation";

const Container = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Container;
