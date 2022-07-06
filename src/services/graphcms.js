import gql from "graphql-tag";
import { GraphQLClient } from 'graphql-request';
export default class GraphCMSContent {
  constructor() {

    this.Client = new GraphQLClient(
      'https://api-eu-west-2.graphcms.com/v2/cl5a6478t6dgl01uk9bzz54km/master',
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTcxNDYyOTYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsNWE2NDc4dDZkZ2wwMXVrOWJ6ejU0a20vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNGVmYzVlN2QtOWRkNy00MTFjLWI0YzUtNTY4N2RmMWY0ZWQxIiwianRpIjoiY2w0dDRjc3RrMnhueTAxeXcxdjAyYW5nYyJ9.p5WzvPFjXpQGB_8YJSORi_0ApF3PoEtj_Z5J9Er0pkAAlyXXXx6SExpqLeuljpnDBRHLEm_8cyvaxajwFzJI2YNn5TM3K9OVgug6zmKyc30L_j7gBhSjBc1gHAtOgtKAAb7VAWbtkyBZ-A2vsUOwFLSOcEPzaD2RFKQIeSTimOyCSsr8HhTe8cUGavPJpOIKNmXNb9HFE37rBgcBv1-KnHd-e7UEcceFl6p4IBm9SPGgSykcraEWqhRgAaT8fJ66_ntwIcx8OVu0Dg1wkQqFfPAVo4KHf4G9kS1rSIM6sPbSefjVmFHf1kPW8LnF_93sHA_4LYLNbLPesZdn49XdIWYG5oPfKGL9cRowkpU5lr4aQQKG4foziq5trj9hRvIEOZ1Gu7OJPU4pElrxkJ7HeuwNyf9wJKH5oo8TD0n9hXIidBo457Yv382bqmYU2pt8lh0O3HpN3HAk6FV7Dru_y-iy3I7k6Jh0fIOhEyp--8UgzQXAeQN7xncQlQrTehQUcLiTLIFh_AUOkgaLpmk4-Fq4pgxHvW7Aoeg2mtYcIaYD0ToeSa4WaCR8fUqIA_QJgUIElTeSwtgfcOul_GbXkNNMq-JMlFBnD0OH0cwBB3CaN_D7kzvqz4OvoyAGsoiZePQzELclk901DU4XfRNOYRTOQjsJAhODpXCtjVr4FJw'
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

