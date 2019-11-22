import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Endgame(props) {
  const Title = props.winner && <h1>{props.winner.name} wins!</h1>;
  const winnerName = props.winner && props.winner.name;
  const loserName = props.loser && props.loser.name;
  const winnerCoins = props.winner && props.winner.coins;
  const loserCoins = props.loser && props.loser.coins;

  return (
    <Modal {...props} size="xl" aria-labelledby="endgame-modal" centered>
      <Modal.Header>
        <Modal.Title>Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {winnerName} has {winnerCoins} coins
        </h4>
        <h4>
          {loserName} has {loserCoins} coins
        </h4>
        <p>
          If you have 0-4 coins, you're a nice person but maybe too naive...
        </p>
        <p>
          If you have 16-20 coins, you can be a rich cheater but no friends...
        </p>
        <p>
          Another result? It seems you work well with others. And they can trust
          you!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/" className="a">
          <Button onClick={props.onHide}>Exit game</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
