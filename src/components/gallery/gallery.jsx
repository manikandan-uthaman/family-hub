import React from 'react';
import Form from '../common/form/form';
import Input from '../common/input/input';
import './gallery.scss';

const gallery = [
  'gal-1.jpeg',
  'gal-2.jpeg',
  'gal-3.jpeg',
  'gal-4.jpeg',
  'gal-5.jpeg',
  'gal-6.jpeg',
  'gal-7.jpeg',
  'gal-8.jpeg',
  'gal-9.jpeg',
  'gal-10.jpeg',
];
class Gallery extends Form {
  state = {
    data: { upload: '' },
    errors: {},
    selectedIndex: '',
  };

  doSubmit = () => {
    console.log('File uploaded');
  };

  validateProperty = (name, value) => {
    if (!value) {
      return 'No file uploaded';
    }
  };

  imageSelected(image) {
    this.setState({ selectedIndex: gallery.indexOf(image) });
  }

  previousImg() {
    const { selectedIndex } = this.state;
    if (selectedIndex === 0) return;
    this.setState({ selectedIndex: selectedIndex - 1 });
  }

  nextImg() {
    const { selectedIndex } = this.state;
    if (selectedIndex === gallery.length - 1) return;
    this.setState({ selectedIndex: selectedIndex + 1 });
  }

  handleChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.setState({ data: { upload: files[0] } });
    }
    return null;
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <React.Fragment>
        <div className="upload-icon-div">
          <label className="upload-label">
            <a href="#upload-container">
              <i className="fa fa-plus upload-plus"></i>
            </a>
          </label>
        </div>
        <div className="gallery-container" id="gallery-container">
          <div className="gallery-heading">Click</div>
          <p className="gallery-sub-heading">where you freeze your memories</p>
          <div className="row outer-row">
            <div className="photo-col photo-col-left">
              <a
                href="#popup-container"
                onClick={() => this.imageSelected('gal-1.jpeg')}
              >
                <img
                  alt="gallery"
                  src={`${process.env.PUBLIC_URL}/gallery/gal-1.jpeg`}
                ></img>
              </a>
            </div>
            <div className="photo-col-right">
              <div className="row inner-row">
                <div className="photo-col photo-inner-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-2.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-2.jpeg`}
                    ></img>
                  </a>
                </div>
                <div className="photo-col photo-inner-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-3.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-3.jpeg`}
                    ></img>
                  </a>
                </div>
              </div>
              <div className="row inner-row">
                <div className="photo-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-4.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-4.jpeg`}
                    ></img>
                  </a>
                </div>
                <div className="photo-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-5.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-5.jpeg`}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row outer-row">
            <div className="photo-col-right">
              <div className="row inner-row">
                <div className="photo-col photo-inner-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-6.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-6.jpeg`}
                    ></img>
                  </a>
                </div>
                <div className="photo-col photo-inner-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-7.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-7.jpeg`}
                    ></img>
                  </a>
                </div>
              </div>
              <div className="row inner-row">
                <div className="photo-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-8.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-8.jpeg`}
                    ></img>
                  </a>
                </div>
                <div className="photo-col">
                  <a
                    href="#popup-container"
                    onClick={() => this.imageSelected('gal-9.jpeg')}
                  >
                    <img
                      alt="gallery"
                      src={`${process.env.PUBLIC_URL}/gallery/gal-9.jpeg`}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="photo-col photo-col-left">
              <a
                href="#popup-container"
                onClick={() => this.imageSelected('gal-10.jpeg')}
              >
                <img
                  alt="gallery"
                  src={`${process.env.PUBLIC_URL}/gallery/gal-10.jpeg`}
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div id="popup-container" className="popup-container">
          <div className="image-container">
            <div
              className={selectedIndex == 0 ? 'previous hide' : 'previous'}
              onClick={() => this.previousImg()}
              display={this.state}
            >
              <i className="fa fa-chevron-left"></i>
            </div>
            <div className="image-div">
              <a className="popup-close" href="#gallery-container">
                x
              </a>
              <img
                alt="gallery"
                className="gallery-img"
                src={`${process.env.PUBLIC_URL}/gallery/gal-${
                  selectedIndex + 1
                }.jpeg`}
              />
            </div>
            <div
              className={
                selectedIndex == gallery.length - 1 ? 'next hide' : 'next'
              }
              onClick={() => this.nextImg()}
            >
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div id="upload-container" className="upload-container">
          <div className="upload-form">
            <a className="popup-close" href="#gallery-container">
              x
            </a>
            <form onSubmit={this.handleSubmit}>
              <Input
                name="upload"
                label="Upload photos"
                type="file"
                accept="image/*"
                multiple
                handleChange={this.handleChange}
              ></Input>
              <button
                className="btn btn-primary btn-rounded"
                disabled={!this.state.data.upload}
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
