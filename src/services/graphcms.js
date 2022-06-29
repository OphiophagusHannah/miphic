import gql from "graphql-tag";
import { GraphQLClient } from 'graphql-request';
export default class GraphCMSContent {
  constructor() {

    this.Client = new GraphQLClient(
      'https://api-us-east-1.graphcms.com/v2/cl4qn8mei3zxx01yw7t2u98y4/master',
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qYzFORUUzTUVaQk9EZzBNVGsyT1RVME1VTTRSa1ZEUkRRNFFVRkJOVVpHUmtaRk0wWkNRZyJ9.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MywiaHR0cHM6Ly9ncmFwaGNtcy5jb20vZmxhZ3MiOnt9LCJpc3MiOiJodHRwczovL2F1dGguZ3JhcGhjbXMuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE4MTU1MDQwNzg3NjA2OTEwMjIzIiwiYXVkIjoiOFZXU2R5VWh0WlQ0M25BaXByMmZqS1JoakptcDhzWXkiLCJpYXQiOjE2NTU5NjU2ODgsImV4cCI6MTY1NjU3MDQ4OCwibm9uY2UiOiJ1UnpYSGlycmxmN1JxSEp-bWtoYlZjamV4TS41YlhVZSJ9.Y9HUW0f18Cyq2UEjrytG0lcfSvzmVBYdQkaH_bVcrcvaLUj3NyJ6kxboBcQTfMqh8sTtEgpQfIl8c8iFwBtw-yly7GMtp1hxlWQM7B_3nMbeR_tFjKF3jiwqDSSEKLmWmlHPsdITc0yY4Rm0h0N662q3gbR5-lZQJbnRVhq0tqD47wY-p7J_AwBVmhzyRppcXCVCPu-dAQ6Bl8jTGJAan8aaA34SqNdX3djcz58AiwZ6JDGjOGVKV9s7ZFjxaogh7T7OnECycQNAUPyip1ZHpX4ebkyJ9zKbL2Nrh3UkNhr6QwTVTRzWMKq6kcPEzoTcOSFEu3W8pEjx0vpWl8uS2Q'
        }
      }
    );
  };

  fetchPosts(){
    const QUERY = gql`
      query {
        posts {
          id
          heroTitle
          heroBody
          statementSubheading
          statement
          offerHeading {
            raw
            html
            markdown
            text
          }
          columnsHeading {
            raw
            html
            markdown
            text
          }
          offerColumnFirst {
            html
          }
          offerColumnSecond {
            raw
            html
            markdown
            text
          }
          offerColumnThird {
            raw
            html
            markdown
            text
          }
          technologyHeading {
            raw
            html
            markdown
            text
          }
          beforeTechnologyImage {
            id
            url
          }
          afterTechnologyImage {
            id
            url
          }
          technologyColumnFirst {
            raw
            html
            markdown
            text
          }
          technologyColumnSecond {
            raw
            html
            markdown
            text
          }
          technologyColumnThird {
            raw
            html
            markdown
            text
          }
          technologyColumnFourth {
            raw
            html
            markdown
            text
          }
          mlContent {
            raw
            html
            markdown
            text
          }
          createdAt

        }
      }
    `;
    return QUERY;
  };

  // fetchPosts(){
  //   const QUERY = gql`
  //     query {
  //       pages(where: { id: "cl4thkzhnypgm0ek21i4s7v4n" }) {
  //         id
  //         mainComponent { 
  //           __typename
  //           ... on HeroBlock {
  //             id
  //             heading
  //           }
  //           __typename
  //           ... on StatementBlock {
  //             id
  //             smallTextArea
  //             statementTextArea
  //           }
  //         }
  //       }
  //     }
  //   `;
  //   return QUERY;
  // };
};

