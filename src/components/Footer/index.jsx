import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneSquare,
    faEnvelope,
    faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { PRIMARY_COLOR, mobile } from "../../global/common-styles.js";

library.add(faFacebookF, faInstagram, faTwitter);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    border-top: 0.5px solid #e2e2e2;
`;
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.5px solid #e2e2e2;
    ${mobile({ flexDirection: "column" })}
`;
const TopLeftContainer = styled.div`
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    ${mobile({
        justifyContent: "flex-start",
        width: "80%",
    })}
`;
const TopRightContainer = styled.div`
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    ${mobile({
        justifyContent: "flex-start",
        width: "80%",
    })}
`;
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 20px;
    gap: 10px;
    ${mobile({ flexDirection: "column" })}
`;
const TextContainer = styled.div`
    margin-bottom: 10px;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    ${mobile({
        fontSize: "15px",
        flexDirection: "column",
    })}
`;

const InfoContainerFollow = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    ${mobile({
        fontSize: "17px",
    })}
`;

const Span = styled.span`
    cursor: pointer;
    font-size: 17px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    ${mobile({
        width: "80%",
    })}
`;
const TextButton = styled.p`
    cursor: pointer;
    font-size: 14px;
    color: #57bf27;
    margin-bottom: 5px;
`;

const TextContainer2 = styled.div`
    height: 70px;
    font-size: 20px;
    border-bottom: 0.5px solid #57bf27;
    margin-bottom: 10px;
    font-weight: 600;
`;

const Footer = () => {
    return (
        <Container>
            <TopContainer>
                <TopLeftContainer>
                    <TextContainer style={{ fontWeight: "bold" }}>
                        Communiquez avec l’équipe
                    </TextContainer>
                    <InfoContainer>
                        <div>
                            <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                color={PRIMARY_COLOR}
                                icon={faPhoneSquare}
                            />
                            <Span>+1-333-333-4444</Span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                color={PRIMARY_COLOR}
                                icon={faEnvelope}
                            />
                            <Span>okadmarket@okad.com</Span>
                        </div>
                    </InfoContainer>
                </TopLeftContainer>
                <TopRightContainer>
                    <TextContainer style={{ fontWeight: "bold" }}>
                        Suivez-nous
                    </TextContainer>
                    <InfoContainerFollow>
                        <FontAwesomeIcon
                            style={{ cursor: "pointer" }}
                            color={PRIMARY_COLOR}
                            icon={["fab", "facebook-f"]}
                        />
                        <FontAwesomeIcon
                            style={{
                                marginLeft: 20,
                                marginRight: 10,
                                cursor: "pointer",
                            }}
                            color={PRIMARY_COLOR}
                            icon={["fab", "fa-instagram"]}
                        />
                        <FontAwesomeIcon
                            style={{ marginLeft: 10, cursor: "pointer" }}
                            color={PRIMARY_COLOR}
                            icon={["fab", "fa-twitter"]}
                        />
                    </InfoContainerFollow>
                </TopRightContainer>
            </TopContainer>

            <BottomContainer>
                <Section>
                    <TextContainer2>Vendre une propriété</TextContainer2>

                    <TextButton>Comment ça fonctionne?</TextButton>
                    <TextButton>Est-ce que mon annonce sera vue?</TextButton>
                    <TextButton>Tarifs</TextButton>
                </Section>
                <Section>
                    <TextContainer2>Acheter une propriété</TextContainer2>

                    <TextButton>Comment ça fonctionne?</TextButton>
                    <TextButton>Pourquoi acheter sur OKAD-MARKET?</TextButton>
                    <TextButton>Outils pour chercher une propriété</TextButton>
                </Section>
                <Section>
                    <TextContainer2>À propos</TextContainer2>

                    <TextButton>Carrière</TextButton>
                    <TextButton>OKAD-MARKET</TextButton>
                    <TextButton>Termes et Conditions</TextButton>
                    <TextButton>Options de paiement</TextButton>
                </Section>
            </BottomContainer>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "15px",
                    borderTop: ".5px solid #e2e2e2",
                    padding: "5px",
                }}
            >
                <FontAwesomeIcon
                    style={{ color: "#57bf27" }}
                    icon={faCopyright}
                />{" "}
                2022 OKAD-MARKET
            </div>
        </Container>
    );
};

export default Footer;
