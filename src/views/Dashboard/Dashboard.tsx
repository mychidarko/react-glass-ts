import React from "react";
import { useRoute } from "glass-router";
import { useStore, useReducer } from "glassx";
import Modal, { modal } from "react-ts-modal";

import Button from "@/components/Button";
import StepView from "@/components/StepView";
import { Navigator } from "@/components/@types/StepView";

const Home = () => {
  const [home] = useStore("home");

  // change global state using a reducer
  // home. comes from the namespace with set in ./store/index
  const changeHome = useReducer("home.CHANGE_HOME");

  // routing using glass router hooks
  const navigate = useRoute();

  return (
    <div>
      <section>
        <h1>Global State Example</h1>
        {home ? <h2>I'm Home</h2> : <h2>I'm Not Home</h2>}
        <Button onClick={changeHome}>Change Global State</Button>
      </section>
      <Button onClick={() => navigate("/404")}>Go to 404</Button>
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
        <Button loading={true} color="transparent" loaderColor="black">Loading</Button>
        <Button color="gold">Button</Button>
        <Button variant="rounded" color="purple">Rounded</Button>
        <Button variant="fab" icon="add" color="blue"></Button>
        <Button variant="outlined" color="green" onClick={() => modal.show("demo-modal")}>
          Toggle Modal
        </Button>
      </section>
      <Modal name="demo-modal">
        <h2>This is something</h2>
      </Modal>
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
