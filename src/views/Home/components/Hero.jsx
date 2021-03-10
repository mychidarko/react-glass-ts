import { Icon } from '@iconify/react';
import { Link } from 'glass-router';
import currencyBtc from '@iconify/icons-mdi/currency-btc';  

import illus from "./../../../assets/images/home/illus1.png";
import colors from "./../../../assets/images/home/hero-color.svg";

const Hero = () => {
    return (
        <div className="hero flex flex:center-all">
            <div className="wrapper flex flex:center-between">
                <div className="hero__content">
                    <h1
                        data-aos="fade-right"
                        className="mb:_3"
                    >
                        Crypto Made <br/> Simple.
                    </h1>
                    <div
                        data-aos="zoom-in"
                        className="hero__body"
                    >
                        <Icon
                            icon={currencyBtc}
                            style={{ fontSize: 260 }}
                            className="hero__icon"
                        />

                        Fast and simple way to buy and sell Bitcoin, Riple and USDT using <b>Mobile Money</b>.

                        <div className="flex flex:center-start hero__buttons mt:_3">
                            <Link
                                className="btn btn-lg btn-primary btn-rounded"
                                to={{
                                    name: "dashboard",
                                    state: {
                                        action: "buy",
                                    },
                                }}
                            >
                                Buy Coins
                            </Link>
                            <Link
                                className="btn -secondary"
                                to={{
                                    name: "dashboard",
                                    state: {
                                        action: "sell",
                                    },
                                }}
                            >
                                Sell Coins
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero__illus">
                    <img
                        data-aos="fade-in"
                        className="freedom"
                        src={illus}
                        alt=""
                    />
                </div>
                <img
                    data-aos="fade-in"
                    className="colors"
                    src={colors}
                    alt=""
                />
            </div>
        </div>
    );
}
 
export default Hero;