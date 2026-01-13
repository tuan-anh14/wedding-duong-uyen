import { useState, useEffect } from "react";
import title_image from "../assets/images/title.png";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img3.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.jpg";
import img18 from "../assets/images/img18.jpg";
import img19 from "../assets/images/img19.jpg";
import img20 from "../assets/images/img20.jpg";
import img21 from "../assets/images/img21.jpg";
import img22 from "../assets/images/img22.jpg";
import img23 from "../assets/images/img23.jpg";
import img24 from "../assets/images/img24.jpg";
import img25 from "../assets/images/img25.jpg";

const imagePool = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
];

const imageClasses = [
  "img img1",
  "img img2",
  "img img3",
  "img img4",
  "img img5",
  "img img6",
  "img img7",
  "img img8",
  "img img9",
  "img img10",
  "img img11",
  "img img12",
  "img img13",
  "img img14",
  "img img15",
  "img img16",
  "img img17",
  "img img18",
  "img img19",
  "img img20",
  "img img21",
  "img img22",
  "img img23",
  "img img24",
  "img img25",
];

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GallerySection = () => {
  const getRandomImages = (previousSrcs = []) => {
    const availableImages = imagePool.filter(img => !previousSrcs.includes(img));
    
    const poolToUse = availableImages.length >= 6 ? availableImages : imagePool;
    
    const shuffled = shuffleArray(poolToUse);
    const selected = [];
    const usedSrcs = new Set();
    
    for (const img of shuffled) {
      if (!usedSrcs.has(img) && selected.length < 6) {
        selected.push(img);
        usedSrcs.add(img);
      }
      if (selected.length === 6) break;
    }

    return selected.map((src, index) => ({
      src,
      className: imageClasses[index],
      id: `${imageClasses[index]}-${Date.now()}-${Math.random()}`,
    }));
  };

  const [images, setImages] = useState(() => getRandomImages());
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
      setImages((prevImages) => {
        const previousSrcs = prevImages.map(img => img.src);
        return getRandomImages(previousSrcs);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gallery">
              <div className="title" data-aos="fade-up" data-aos-once="false">
                <p>Album hình cưới</p>
                <img src={title_image} alt="" />
              </div>
              <div className="album">
                {images.map((image) => (
                  <img
                    key={`${image.id}-${key}`}
                    src={image.src}
                    className={`${image.className} fade-in`}
                    alt=""
                    data-aos="fade-up"
                    data-aos-once="false"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
