import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Header from "./components/Header";
import "./styles/main.scss";
import broadcom from "./assets/broadcom-logo.svg";
import twilio from "./assets/twilio-logo.svg";
import checkr from "./assets/checkr-logo.svg";

function App() {
    const cardsRef = useRef(null);

    let active = false;

    useEffect(() => {
        if (active) {
            return;
        }

        active = true;
        gsap.registerPlugin(ScrollTrigger);

        const pin = cardsRef.current.querySelector(".cards-pin");
        const cards = cardsRef.current.querySelectorAll(".card");
        const cardsArray = Array.from(cards).slice(1, 5).reverse();
        const cardContent = cardsRef.current.querySelector(".card-content");
        const cardLogos = cardsRef.current.querySelector(".logos");

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".intro",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        const cardScale = window.innerWidth / cards.item(0).getBoundingClientRect().width;

        gsap.set(cardContent, {
            scale: 0.5,
        });

        gsap.set(cardLogos, {
            y: 500,
        });

        gsap.set(cards.item(4), {
            rotate: 10,
        });

        timeline.to(
            pin,
            {
                ease: "power1.inOut",
                xPercent: -83.33,
                duration: 1,
            },
            0
        );

        timeline.to(
            cardsArray,
            {
                rotate: 360,
                ease: "power1.in",
                duration: 1,
                stagger: 0.12,
            },
            0
        );

        timeline.set(
            cards.item(0),
            {
                zIndex: 1,
                transformOrigin: "50% 50%",
            },
            0.86
        );

        timeline.to(
            cards.item(0),
            {
                scale: cardScale,
                ease: "power2.inOut",
                duration: 1,
            },
            1
        );

        timeline.to(
            cardContent,
            {
                scale: 1 / cardScale,
                ease: "power2.inOut",
                duration: 1,
            },
            1
        );

        timeline.to(
            cardLogos,
            {
                y: 0,
                ease: "power2.out",
                duration: 0.75,
            },
            1.25
        );
    }, []);

    return (
        <>
            <Header />

            <main>
                <div className="intro">
                    <div className="heading">
                        <h1>Intelligent Loyalty</h1>
                        <p>Automatically tailor your program to each customer's unique preferences.</p>
                    </div>
                    <div className="cards" ref={cardsRef}>
                        <div className="cards-pin">
                            <div className="card">
                                <div className="card-content">
                                    <h2>
                                        Rethink how <br />
                                        you do loyalty
                                    </h2>
                                    <div className="logos">
                                        {[1, 2, 3, 4].map(() => {
                                            return (
                                                <>
                                                    <img className="broadcom" src={broadcom} alt="" />
                                                    <img className="twilio" src={twilio} alt="" />
                                                    <img className="checkr" src={checkr} alt="" />
                                                </>
                                            );
                                        })}
                                    </div>
                                    <video
                                        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/PkCzQ9J/crowd-waving-hands-in-the-night-club-party_rieep19xx__0d2362937419949d451deb4e793d29f1__P360.mp4"
                                        autoPlay
                                        loop
                                        muted></video>
                                </div>
                            </div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="content">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>
                        Eaque voluptas, itaque quam ad pariatur unde sit dolorum, eum repellat cupiditate aperiam dolorem corporis
                        labore iusto non minima? Sit, provident optio.
                    </p>
                </div> */}
            </main>
        </>
    );
}

export default App;
