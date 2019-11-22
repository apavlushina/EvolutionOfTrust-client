import React from "react";
import { useState, render } from "react";
import { Carousel } from "react-bootstrap/";
import image1 from "./rules1.png";
import image2 from "./rules2.png";
import image3 from "./rules3.png";
import image4 from "./rules4.png";

export default function Rooms(props) {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Carousel.Caption>
            <h3>THE GAME OF TRUST </h3>

            <p>During World War I, peace broke out.</p>
            <p>
              It was Christmas 1914 on the Western Front. Despite strict orders
              not to chillax with the enemy,
              <br /> British and German soldiers left their trenches, crossed No
              Man's Land,
              <br /> and gathered to bury their dead, exchange gifts, and play
              games.{" "}
            </p>
            <p>
              Meanwhile: it's 2019, the West has been at peace for decades, and
              wow, we suck at trust. <br />
              Surveys show that, over the past forty years, fewer and fewer
              people say they trust each other. So here's our puzzle:{" "}
            </p>
            <p>
              <strong>
                Why, even in peacetime, do friends become enemies? <br />
                And why, even in wartime, do enemies become friends?
              </strong>
            </p>
            <p>
              Lets try to explain our epidemic of distrust with game theory!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>THE GAME OF TRUST </h3>
            <p>
              You have one choice. In front of you is a machine: <br />
              if you put a coin in the machine, the other player gets three
              coins – and vice versa.
            </p>
            <img alt="game" src={image1} className="rules-img"></img>
            <p>
              You both can either choose to <strong>COOPERATE</strong>
              (put in coin), or <strong>CHEAT</strong> (don't put in coin).
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>THE GAME OF TRUST </h3>
            <p>
              Let's say the other player cheats, and doesn't put in a coin.{" "}
            </p>
            <img alt="game" src={image2} className="rules-img"></img>
            <p>
              What should you do? Probably, <strong>CHEAT</strong>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>THE GAME OF TRUST </h3>
            <p>
              Exactly! Why let that moocher mooch off of you? If you cooperate &
              they cheat, you lose a coin while they gain three. (score: -1 vs
              +3) <br />
              However, if you both cheat, neither of you gain or lose anything.
              (score: 0 vs 0)
              <br />
              <strong>Therefore: you should CHEAT.</strong>
            </p>
            <img alt="game" src={image3} className="rules-img"></img>
            <p>
              <strong>
                But let's say the other player cooperates, and puts in a coin.
              </strong>
              What should you do now? <strong>COOPERATE?</strong>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>THE GAME OF TRUST </h3>
            <p>
              Sure, seems like the right thing to do...
              <strong>OR IS IT??</strong> <br />
              Because if you both cooperate, you both give up a coin to gain
              three. (score: +2 vs +2) <br />
              But if you cheat & they cooperate, you gain three coins at their
              cost of one. (score: +3 vs -1)
              <strong>Therefore: you "should" still CHEAT.</strong>
              <br />
              <img alt="game" src={image4} className="rules-img"></img>
              <br />
              And that's our dilemma. Trust is nice, but it can let others take
              advantage of you -- or shoot you as you come unarmed out of a
              trench. <br />
              Sometimes, distrust is rational! But now, what happens if we play
              this game in real and will check can you trust another player?
              <br />
              <strong>TRY IT!</strong> And after 5 rounds you will now the truth
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <div>
      <h2>You are in the room {props.name}</h2>
      <ControlledCarousel />
    </div>
  );
}
