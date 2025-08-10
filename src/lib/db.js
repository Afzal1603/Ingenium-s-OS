import { openDB } from "idb";

export const dbPromise = openDB("CameraAppDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("images")) {
      db.createObjectStore("images", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  },
});
export const saveImage = async (imageDate) => {
  const db = await dbPromise;
  await db.add("images", { image: imageDate, date: new Date() });
};

export const getImages = async () => {
  const db = await dbPromise;
  return await db.getAll("images");
};
