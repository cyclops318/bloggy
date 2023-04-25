import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.hygraph.com/v2/clgrzs2pr120r01un8mzudyv2/master'
);

const GET_SLUG_LIST = gql`
  {
    posts {
      slug
    }
  }
`;

const GET_SINGLE_POST = gql`
  query Post($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        markdown
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  {
    posts {
      id
      title
      description
      datePublished
      slug
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export { graphcms, GET_ALL_POSTS, GET_SINGLE_POST, GET_SLUG_LIST };
