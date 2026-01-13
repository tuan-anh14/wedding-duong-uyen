import anhbia from "../assets/images/anhbia.jpg";

const ThankYouSection = () => {
  return (
    <section id="thank-you-section">
      <div className="footer">
        <div className="footer-image">
          <img src={anhbia} alt="Wedding couple" />
          <div className="overlay"></div>
        </div>
        <div className="footer-content" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
          <div className="decorative-line"></div>
          <p className="text_01">Thank You</p>
          <p className="text_02">Rất hân hạnh được đón tiếp!</p>
          <div className="hearts">
            <span>♥</span>
            <span>♥</span>
            <span>♥</span>
          </div>
          <p className="text_03">Dương & Uyên</p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
