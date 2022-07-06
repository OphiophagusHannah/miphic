import gql from "graphql-tag";
import { GraphQLClient } from 'graphql-request';
export default class GraphCMSContent {
  constructor() {

    this.Client = new GraphQLClient(
      'https://api-eu-west-2.graphcms.com/v2/cl5a6478t6dgl01uk9bzz54km/master',
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTcxNDc3MjIsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsNWE2NDc4dDZkZ2wwMXVrOWJ6ejU0a20vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjFiYzljYmMtMTljZS00ZTk1LTk4Y2MtNzM0MDhlN2QxMDUyIiwianRpIjoiY2w1YTZ5dHo1NmZ4czAxdXA5dWN6ZHp3dSJ9.zXQZ6YiLFnloSanhfv81XyJ2Oo3ZoWTToOUVBZfUi9cOvHl6zRwUSLdk_EjU6SUlZLnu9RNkQ1_coI4NENHzqIJGNxXvOr4dCmaWj230jOneYXTmqFVe3GLapmGgr4KopGiocCHJxBIm7RHulVrafJI_o3Ktq1fRBBM-VmX2L2RnOrb2StJBYDzhiEz6Hu1Ca-V64INaLAlmGv7iTaUr5VV5hRpCDRucukSjAV5ZmZq8vIJkYlcSIVQFjTWIbkg3nUaZz8U4jeGRT9aB25O7e_BUZ2X_9QX-jTBKZPBSAld0sR1D4J2hna510JPrCbe5iuWxfFwoGV5pMAeBoqC_MLkJuUKWzXbfJkB9Qc8b92KtErDzY_tft2waX_wsNBAFN109IpOuPPhT-WvFZ-JznhYVKDZCubNcnP_QYYfNsGUrEvgslIYuvboOMMDx-Fg3vzujHNyTY1vmMkPpf0d2ok4801yUD8VIVBf13MZc6oSPHNarrgQlcBzLmAB3zJ1XUSRkmUCyZYqDYNluMnW95Mye_PGz4XYdHl3AA-tk0uclbZM_P7tmDWon1uSBfeVX87z3Jh_mVNWBXud8e4mW6WTOGCCxvFJvG4miCOlOWAley5EkW1EZxXImYUfO2unb4FVGSw5Pw95o3n0rLBqeZmgqcNT4ijIa8uporVw-h54'
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
          tagMission 
          tagOffer
          tagImportance
          tagApproach
          tagBenefits
          tagData
          contactEmail
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
          moreOffers {
            raw
            html
            markdown
            text
          }

          bigDataColumn {
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
          contactUsHeading {
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

