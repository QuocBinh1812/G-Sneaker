import { useEffect, useState } from "react";

export function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
// module.exports = { importAll };
