import { useStaticQuery, graphql } from 'gatsby';

const getHost = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        host
        port
      }
    }
  `);
  return data.site;
};

export default gitHost;
