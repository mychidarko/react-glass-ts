import { useStore, useReducer } from "@/utils/glass/store";
import Button from "@/components/Button";
import StepView from "@/components/StepView";
import React from "react";
import { Navigator } from "src/src/components/@types/StepView";

const Home = () => {
  const home = useStore("home");
  const changeHome = useReducer("home.changeHome");

  return (
    <div>
      <section>
        <h1>Global State Example</h1>
        {home ? <h2>I'm Home</h2> : <h2>I'm Not Home</h2>}
        <Button onClick={changeHome}>Change Global State</Button>
      </section>
      <section>
        <h1>Step Component Example</h1>
        <StepView>
          <Step1 />
          <Step2 />
        </StepView>
      </section>
      <section>
        <h1>Buttons</h1>
        <p>The button component is 100% customizable and works well with all CSS libraries</p>
        <Button loading={true} loaderColor="black">Loading</Button>
        <Button>Button</Button>
        <Button variant="rounded">Rounded</Button>
      </section>
    </div>
  );
};

const Step1: React.FC<Partial<Navigator>> = ({ next }) => {
  return (
    <div>
      <span>Step 1</span>
      <Button onClick={next}>Next</Button>
    </div>
  );
}

const Step2: React.FC<Partial<Navigator>> = ({ prev }) => {
  return (
    <div>
      <span>Step 2</span>
      <Button onClick={prev}>Back</Button>
    </div>
  );
};

export default Home;
