const StepInfo = ({ index, title, body }) => {
    return (
        <div className="step__info flex-col flex:center-all">
            <div
                className="step__info__number flex flex:center-all"
                data-aos="fade-up"
                data-aos-duration="100"
            >
                {index}
            </div>
            <h3
                className="step__info__title mt:_4"
                data-aos="fade-up"
                data-aos-duration="400"
            >
                {title}
            </h3>
            <p
                className="step__info__body mt:_1"
                data-aos="fade-up"
            >
                {body}
            </p>
        </div>
    );
}
 
export default StepInfo;