import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
class ImageUpload extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div>
          <div>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={this.props.handleChange}
            />
            Выбрать логотип клуба
            <label htmlFor="raised-button-file">
              <Button
                variant="outlined"
                color="primary"
                component="span"
                style={{ padding: "0px", marginLeft: "10px" }}
              >
                <CloudUploadIcon></CloudUploadIcon>
              </Button>
            </label>
            <CircularProgress
              variant="determinate"
              value={this.props.progress}
              max="100"
              size="20px"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
