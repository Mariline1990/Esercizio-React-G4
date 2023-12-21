import { Component } from "react";
import { Container } from "react-bootstrap";

class CommentArea extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
      } else {
        // siamo nel caso di errore con uno status >= 400

        // gestiamo l'avviso
        this.setState({
          hasAlert: true,
          alert: {
            message: "Errore nell'invio dei dati. Status: " + response.status,
            variant: "danger",
            status: response.status,
          },
        });
        // spegnamo l'avviso
        setTimeout(
          () => this.setState({ hasAlert: false, alert: { message: "", status: null, variant: "primary" } }),
          2500
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.handleLoading(false);
    }
  };
  render() {
    return (
      <Container>
        <p>{this.props.title}</p>
      </Container>
    );
  }
}

export default CommentArea;
