import React, { useState } from "react";

const images = [
  "https://m.media-amazon.com/images/I/61dj32WdrxL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61Ri6rbWJcL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/51w0MfA2wyL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/51-2YzlDh-L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/713+fmmem9L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61aBZD9Gz9L._SL1500_.jpg",
];

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "40px",
    maxWidth: "1000px",
    margin: "auto"
  },
  thumbnailColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  thumbnail: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.2s ease"
  },
  mainImageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "20px"
  },
  mainImage: {
    width: "100%",
    maxWidth: "450px",
    objectFit: "contain"
  }
};


const Website = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div style={styles.container}>
      <div style={styles.thumbnailColumn}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            style={{
              ...styles.thumbnail,
              border: mainImage === img ? "2px solid #007185" : "1px solid #ddd"
            }}
            onMouseEnter={() => setMainImage(img)}
          />
        ))}
      </div>

      <div style={styles.mainImageContainer}>
        <img src={mainImage} alt="main product" style={styles.mainImage} />
      </div>
    </div>
  );
};

export default Website;
