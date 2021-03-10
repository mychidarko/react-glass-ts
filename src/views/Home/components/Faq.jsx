const Faq = ({ question, answer }) => {
    return (
        <div className="faq flex-col flex:center-all">
            <h3
                className="faq__question"
                data-aos="fade-up"
                data-aos-duration="100"
            >
                {question}
            </h3>
            <p
                className="faq__answer mt:_1"
                data-aos="fade-up"
                data-aos-duration="400"
                dangerouslySetInnerHTML={{ __html: answer }}
            ></p>
        </div>
    );
}
 
export default Faq;