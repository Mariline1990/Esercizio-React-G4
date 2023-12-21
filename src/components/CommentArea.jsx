import { Component } from "react";
import { Container } from "react-bootstrap";

class CommentArea extends Component {
  async function() {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDMxNzUxMjgsImV4cCI6MTcwNDM4NDcyOH0.8pYtolr_ikZIN1gn4b2ciQDrs8q7YqR4Hn6ZX5xBx74",
      },
    });

    if (response.ok) {
      const singlebookcomment = await response.json();
    }
  }
  catch(err) {
    console.log(err);
  }

  render() {
    return (
      <Container>
        <p>{this.singlebookcomment.bookObj}</p>
      </Container>
    );
  }
}

export default CommentArea;
