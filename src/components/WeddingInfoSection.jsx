import title_image from "../assets/images/title.png";
import anhthu3 from "../assets/images/anhthu3.jpg";
import anhthu6 from "../assets/images/anhthu6.jpg";
import anhthu5 from "../assets/images/anhthu5.jpg";

const WeddingInfoSection = () => {
  return (
    <section id="wedding-info">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-title" data-aos="flip-left" data-aos-once="false">
              <img src={title_image} alt="" />
              <p>Trân Trọng Kính Mời</p>
            </div>
            <div className="image-gallery">
              <img src={anhthu3} alt="image gallery 1" data-aos="zoom-in"
            data-aos-once="false" />
              <img src={anhthu6} alt="image gallery 2" data-aos="zoom-in-up"  
            data-aos-once="false"/>
              <img src={anhthu5} alt="image gallery 3" data-aos="zoom-in-down"
            data-aos-once="false" />
            </div>
                <div className="wedding-details">
                  <div className="title-body" data-aos="flip-right" data-aos-once="false">
                    <h4 className="text-01">THAM DỰ TIỆC MỪNG LỄ TÂN HÔN</h4>
                    <h5 className="text-02">Vào Lúc</h5>
                  </div>
                  <div className="wedding-time">
                    <div className="hour" data-aos="fade-right" data-aos-once="false">
                      <p>Đón khách 17:30</p>
                      <p>Khai tiệc 18:00</p>
                    </div>
                    <div className="month" data-aos="fade-up" data-aos-once="false">
                      <div className="day">Thứ 7</div>
                      <div className="day-second">(24)</div>
                      <div className="month1">Tháng 1</div>
                    </div>
                    <div className="year" data-aos="fade-left" data-aos-once="false">Năm 2026</div>
                  </div>
                  <div className="lunar-calendar" data-aos="fade-up-right" data-aos-once="false">
                    <p>(Âm lịch - Tức Ngày 06 Tháng 12 Năm 2025 )</p>
                  </div>
                  <div className="title-footer" data-aos="fade-up-left" data-aos-once="false">
                    <p>BUỔI TIỆC ĐƯỢC TỔ CHỨC TẠI</p>
                  </div>

                  <div className="wedding-locations-wrapper">
                    {/* Nhà Trai */}
                    <div className="wedding-location-card groom-side" data-aos="fade-right" data-aos-once="false">
                      <div className="location-header">
                        <div className="icon-wrapper">
                          <span className="location-icon">📍</span>
                        </div>
                        <h3 className="location-title">TƯ GIA NHÀ TRAI</h3>
                      </div>
                      <div className="location-body">
                        <p className="location-address">
                          Thôn Quan Văn, Xã Lý Nhân<br/>
                          Tỉnh Ninh Bình
                        </p>
                      </div>
                      <div className="location-footer">
                        <a className="btn-map groom-btn" href="https://maps.app.goo.gl/YFxBPSmSxcVeZtRn6" target="_blank" rel="noopener noreferrer">
                          <span className="btn-icon">🗺️</span>
                          <span className="btn-text">Xem Bản Đồ</span>
                        </a>
                      </div>
                    </div>

                    {/* Nhà Gái */}
                    <div className="wedding-location-card bride-side" data-aos="fade-left" data-aos-once="false">
                      <div className="location-header">
                        <div className="icon-wrapper">
                          <span className="location-icon">📍</span>
                        </div>
                        <h3 className="location-title">TƯ GIA NHÀ GÁI</h3>
                      </div>
                      <div className="location-body">
                        <p className="location-address">
                          Thôn Nội 2, Xã Bình Lục<br/>
                          Tỉnh Ninh Bình
                        </p>
                      </div>
                      <div className="location-footer">
                        <a className="btn-map bride-btn" href="https://maps.app.goo.gl/FRK2zaMTitgEPsFd9" target="_blank" rel="noopener noreferrer">
                          <span className="btn-icon">🗺️</span>
                          <span className="btn-text">Xem Bản Đồ</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfoSection;
