import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import Endgame from "./Endgame";
import { endgame } from "../actions/decisions";
import { connect } from "react-redux";

function EndgameContainer(props) {
  const [modalShow, setModalShow] = React.useState(false);
  //somewhere insert method: setModalShow(true)

  const exitGame = () => {
    endgame(props.user.jwt);
  };

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        See result!
      </Button>

      <Endgame
        show={modalShow}
        onHide={() => exitGame()}
        winner={props.winner}
        loser={props.loser}
      />
    </ButtonToolbar>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(EndgameContainer);
