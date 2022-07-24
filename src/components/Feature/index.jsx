import CardPropriety from "../CardPropriety";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Carousel, { consts } from "react-elastic-carousel";
import "./feature.css";
import { proprieties } from "../../global/fake-proprieties.js";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../global/common-styles.js";

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
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer =
            type === consts.PREV ? (
                <FontAwesomeIcon
                    style={{ fontSize: 30, cursor: "pointer" }}
                    icon={faArrowAltCircleLeft}
                />
            ) : (
                <FontAwesomeIcon
                    style={{ fontSize: 30, cursor: "pointer" }}
                    icon={faArrowAltCircleRight}
                />
            );
        return (
            <Button onClick={onClick} disabled={isEdge}>
                {pointer}
            </Button>
        );
    };
    return (
        <div className="feature">
            <div className="title">Propriétés en vedette</div>
            <div className="proprieties">
                <Carousel
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={700}
                >
                    {proprieties.map((item) => (
                        <CardPropriety key={item.id} propriety={item} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Feature;
