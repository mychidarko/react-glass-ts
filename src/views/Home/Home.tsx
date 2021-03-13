import React from "react";
import { useStore, useReducer, setStore } from "@/utils/glass/store";
import Button from "@/components/Button";
import StepView from "@/components/StepView";
import { Navigator } from "@/components/@types/StepView";
import Modal from "@/utils/glass/modal";
import { useRoute } from "@/utils/glass/router/glass-router/router";

const Home = () => {
  const home = useStore("home");
  const modalOpen = useStore("modal");

  // change global state using a reducer
  const changeHome = useReducer("home.changeHome");

  // change global state using setStore
  const toggleModal = () => setStore({ modal: !modalOpen });

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
        <Button variant="outlined" color="green" onClick={toggleModal}>Toggle Modal</Button>
      </section>
      <Modal show={modalOpen} close={toggleModal} name="demo-modal">
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
