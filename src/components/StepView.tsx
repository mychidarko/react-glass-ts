import React, { Component } from "react";
import GlassX, { useStore } from "../utils/glass/store";
import { Navigator, StepViewProps } from "./@types/StepView";

const StepView: React.FC<StepViewProps> = ({
    value,
    children,
    ...rest
}) => {
    const active = useStore("stepView") || 0;

    const setActive = (newActive: number) => {
        GlassX.set({ stepView: newActive });
    };
    // const [active, setActive] = useState(value || 0);

    children = React.Children.toArray(children);

    const next: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (active === children.length - 1) {
            return;
        }

        setActive(active + 1);
    }

    const prev: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (active === 0) {
            return;
        }

        setActive(active - 1);
    }

    const props: Navigator = { next, prev, active, total: children.length - 1 };

    return (
        <div className="step__container" {...rest}>
            {
                children.map((child: any, index: number) => {
                    if (index === active) {
                        const Step = AsStep(child, props);

                        return <Step key={index} />;
                    }

                    return false;
                })
            }
        </div>
    );
}

function AsStep(Child: any, navigator: Navigator) {
    return class extends Component {
        render() {
            const Compo = Child.type;
            return <Compo {...this.props} {...Child.props} {...navigator} />
        }
    }
}

export function Navigation({ next, prev, active, total }: Navigator) {
    return (
        <div className="step-view__navigator">
            {active > 0 && <button onClick={prev}>Previous</button>}
            {active < total && <button onClick={next}>Next</button>}
        </div>
    );
}

export function Indicators({ active, total }: Navigator) {
    const divs = [];

    for (let i = 0; i < total + 1; i++) {
        divs.push(<div key={i} className={`btn btn-danger step-view__indicator ${i === active && "-active btn-primary"}`}></div>);
    }

    return (
        <div className="step-view__indicators carousel-indicators">{divs}</div>
    );
}

export default StepView;
