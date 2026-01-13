import {useState, useRef } from "react";
import image_bg from "../assets/images/image_bg.png";
import logo_bg from "../assets/images/icon_click.png";
import HeroSection from "../components/HeroSection";
import CoupleIntroSection from "../components/CoupleIntroSection";
import WeddingInfoSection from "../components/WeddingInfoSection";
import GallerySection from "../components/GallerySection";
import ThankYouSection from "../components/ThankYouSection";
import { MdMusicOff, MdMusicNote } from "react-icons/md";
import ngay_dau_tien from "../assets/music/ngay-dau-tien.mp3";


const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [introState, setIntroState] = useState("initial");
  // initial → opening → hide → done

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };


  const handleOpenInvite = () => {
    setIntroState("opening"); // chạy animation mở

    setTimeout(() => {
      // phát nhạc
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch((err) => console.warn(err));
      }
      setIsPlaying(true);
    }, 800);

    setTimeout(() => {
      setIntroState("hide"); // ẩn hoàn toàn background
    }, 2000); // thời gian đúng bằng animation bạn muốn
  };

  const showContent = introState === "hide";

  return (
    <div>
      <div className={`background ${introState}`}>
        <div className="bg_left_wrapper">
          <div className="bg_left">
            <img src={image_bg} alt="" />
          </div>

          {introState === "initial" && (
            <div className="icon_click" onClick={handleOpenInvite}>
              <img src={logo_bg} alt="" />
            </div>
          )}
        </div>

        <div className="bg_right">
          <img src={image_bg} alt="" />
        </div>
      </div>

      {/* Nhạc nền */}
      <audio ref={audioRef} src={ngay_dau_tien} autoPlay muted loop hidden />

      {/* Nút nhạc */}
      {showContent && (
        <div
          className={`music-button ${isPlaying ? "playing" : ""}`}
          onClick={toggleMusic}
        >
          {isPlaying ? <MdMusicNote size={24} className="icon" /> : <MdMusicOff size={24} className="icon" />}
        </div>
      )}

      {/* Nội dung chính */}
      {showContent && (
        <div>
          <HeroSection />
          <CoupleIntroSection />
          <WeddingInfoSection />
          <GallerySection />
          <ThankYouSection />
        </div>
      )}
    </div>
  );
};

export default Home;
