import React from "react";
import PropTypes from "prop-types";
import Formsy, { HOC } from "formsy-react";

import theme from "../theme";
import FormContainer from "../Shared/FormContainer";
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline
} from "../Shared/Form";

class FormQuote extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async submit(model) {
    dataLayer.push({
      formTitle: "Quote",
      event: "formSubmitted"
    });

    const response = await fetch("https://formspree.io/xgaewyjx", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(model)
    });
  }

  render() {
    return (
      <FormContainer brand submit={this.submit}>
        <div>
          <FormGroup>
            <FormGroupHeadline>Your details (Required)</FormGroupHeadline>

            <Input placeholder="Your name" name="name" required />
            <Input
              placeholder="Your email"
              name="email"
              validations={{
                isEmail: true
              }}
              validationErrors={{
                isEmail: "Not a valid email"
              }}
              required
            />
            <Input
              placeholder="Your phone number"
              name="phoneNumber"
              validations="isExisty"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormGroupHeadline>Strata details (required)</FormGroupHeadline>

            <Input placeholder="Your strata address" name="address" required />
            <Input placeholder="Your postcode" name="postcode" required />
            <Input
              placeholder="Number of units in your strata"
              name="unitsInScheme"
              required
            />

            <Textarea
              placeholder="Tell us a bit more about your building so that we can quote accurately the first time"
              name="comments"
              rows="7"
              required
            />
          </FormGroup>

          {/* Formspree filters */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_subject"
            value="Strata website new business submission"
          />
        </div>
      </FormContainer>
    );
  }
}

FormQuote.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default FormQuote;
