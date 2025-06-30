import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} | Gadget Heaven</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
