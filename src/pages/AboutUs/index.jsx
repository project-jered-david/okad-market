import "./about-us.css";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="title">À propos de nous</div>
            <div className="about-us-container">
                <div className="about-us-container-wrapper">
                    <div className="left-content">
                        <img
                            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt=""
                        />
                    </div>
                    <div className="right-content">
                        <div className="our-company-title">
                            À propos de notre compagnie
                        </div>
                        <div className="company-details">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed tempor arcu non ligula convallis, vel
                            tincidunt ipsum posuere. Fusce sodales lacus ut
                            pellentes sollicitudin. Duis iaculis, arcu ut
                            hendrerit pharetra, elit augue pulvinar magna, a
                            consectetur eros quam magna.
                        </div>
                        <div className="statistics">
                            <div className="statistic">1</div>
                            <div className="statistic">2</div>
                            <div className="statistic">3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
