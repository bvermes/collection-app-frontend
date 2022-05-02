let origin = "https://localhost:7028";
let api = origin + "/api";

export const Endpoints = {
  collectionList: api + "/Collection",
  marketList: api + "/Collection/for-sale",
  collectionItemEdit: api + "Collection/" + id,
  saveImage: api + "Collection/SaveFile",
};

export const headers = {
  "Content-Type": "application/json",
};
