import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const DropDownContainer = styled("div")`
    flex: 1;
    background: #ffffff;
    border: 0.5px solid #e2e2e2;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    cursor: pointer;
`;

const DropDownHeader = styled("div")`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DropDownListContainer = styled("div")`
    position: absolute;
    left: 0;
    z-index: 100;
    width: 100%;
`;

const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border-radius: 5px;
    border: 0.5px solid #e2e2e2;
    min-height: 90px;
    max-height: 180px;
    overflow-y: scroll;
    box-sizing: border-box;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
`;

export default function CustomDropDown({ options, setValue }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setValue(value);
        setIsOpen(false);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption}
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map((option) => (
                            <ListItem
                                onClick={onOptionClicked(option)}
                                key={Math.random()}
                            >
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
