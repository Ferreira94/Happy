import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      name: image.id,
      url: `http://10.0.0.37:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};