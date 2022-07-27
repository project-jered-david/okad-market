import CardPropriety from "../CardPropriety";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
/* import Carousel, { consts } from "react-elastic-carousel"; */
import "./feature.css";
import { proprieties } from "../../global/fake-proprieties.js";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../global/common-styles.js";
import Slider from "react-slick";

const Button = styled.button`
    border: none;
    color: ${PRIMARY_COLOR};
    background-color: white;
    &:disabled {
        color: #e3e1e1;
    }
`;

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

const Feature = () => {
    const settings = {
        dots: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
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
