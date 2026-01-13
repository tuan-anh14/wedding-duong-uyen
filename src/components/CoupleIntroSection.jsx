import header from "../assets/images/header.png";
import anhthu2 from "../assets/images/anhthu2.jpg";

const CoupleIntroSection = () => {
  return (
    <section id="couple-intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={header} className="header" />
            <div className="family-info">
              <div
                className="parent-section"
                data-aos="fade-up-left"
                data-aos-once="false"
              >
                <div className="title">Nhà Trai</div>
                <div className="name">Ông: Thiều Văn Vinh</div>
                <div className="name">Bà: Đỗ Thị Thuý</div>
                <div className="address">Thôn Quan Văn, Xã Lý Nhân, Tỉnh Ninh Bình</div>
              </div>
              <div
                className="parent-section"
                data-aos="fade-up-right"
                data-aos-once="false"
              >
                <div className="title">Nhà Gái</div>
                <div className="name">Ông: Nguyễn Văn Biên</div>
                <div className="name">Bà: Lê Thị Nhâm</div>
                <div className="address">Thôn Nội 2, Xã Bình Lục, Tỉnh Ninh Bình</div>
              </div>
            </div>
            <div className="couple">
              <div
                className="title"
                data-aos="fade-up-left"
                data-aos-once="false"
              >
                Trân Trọng Báo Tin Lễ Tân Hôn Của
              </div>
              <div
                className="name"
                data-aos="fade-up-left"
                data-aos-once="false"
              >
                Thiều Đại Dương
              </div>
              <div
                className="and"
                data-aos="fade-down-right"
                data-aos-once="false"
              >
                &
              </div>
              <div
                className="name"
                data-aos="fade-up-right"
                data-aos-once="false"
              >
                Nguyễn Hà Uyên
              </div>
              <div className="image">
                <img
                  src={anhthu2}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-once="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleIntroSection;
