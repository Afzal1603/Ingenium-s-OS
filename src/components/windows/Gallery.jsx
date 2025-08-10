import React, { useEffect, useState } from "react";
import Window2 from "../Window2";
import { galleryToggle, imageToggle } from "../../redux/slice/pcSlice";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../lib/db";
import { setImagePath } from "../../redux/slice/pcSlice";
const Gallery = () => {
  const image = useSelector((state) => state.image);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await getImages();
        setGallery(images || []);
        console.log(images);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, []);
  const [gallery, setGallery] = useState([]);
  const galleryOpen = useSelector((state) => state.gallery);
  return (
    <Window2 name={"Gallery"} toggle={galleryToggle} state={galleryOpen}>
      <div className="flex flex-wrap gap-2 p-4">
        {gallery.length === 0 ? (
          <h1 className="text-white">No images found</h1>
        ) : (
          gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                dispatch(setImagePath(image.image));
                dispatch(imageToggle(image));
              }}
            >
              <img
                key={index}
                src={image.image}
                alt={image}
                className="w-20 h-20 object-center object-cover"
              />
            </button>
          ))
        )}
      </div>
    </Window2>
  );
};

export default Gallery;
