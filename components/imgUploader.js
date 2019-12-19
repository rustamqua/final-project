import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div>
          <div>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id={this.props.label}
              type="file"
              onChange={this.props.handleChange}
            />
            {this.props.descr}
            <label htmlFor={this.props.label}>
              <Button
                variant="contained"
                color="secondary"
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
