import Logo from './../../../assets/images/Logo.svg';

const Footer = () => {
    return (
        <footer className="flex-col">
            <b>
                &copy; Simplecoins 2020
            </b>
            <p className="mt:_2 mb:0">
                Simplecoins is powered by BuyCoins and built on the BuyCoins API.
            </p>
            <small>
                Transfers to Ghana are processed manually by our dedicated team.
            </small>
            <img src={Logo} alt="" className="footer__logo" />
        </footer>
    );
}
 
export default Footer;
