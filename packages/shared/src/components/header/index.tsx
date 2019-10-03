const HeaderComponent = () => {
  let Header = null;

  // tslint:disable:no-var-requires
  if (typeof window === "undefined") {
    Header = require("./header.web").default;
  } else {
    Header = require("./header.native").default;
  }
  return Header;
};
export default HeaderComponent;
