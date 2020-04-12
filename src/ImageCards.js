import React from "react";

class ImageCards extends React.Component {
  render() {
    const { urls, description } = this.props.image;
    return <img alt={description} src={urls.regular} />;
  }
}
export default ImageCards;
