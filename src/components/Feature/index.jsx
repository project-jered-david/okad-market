import CardPropriety from "../CardPropriety";
import "./feature.css";
import { proprieties } from "../../global/fake-proprieties.js";
import Slider from "react-slick";

const Feature = () => {
    const settings = {
        dots: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="feature">
            <div className="title">Propriétés en vedette</div>
            <div className="proprieties">
                <Slider className="custom-container" {...settings}>
                    {proprieties.map((item) => (
                        <div className="custom-item">
                            <CardPropriety key={item.id} propriety={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Feature;
