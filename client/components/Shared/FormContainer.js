import React, { PropTypes } from 'react'
import Formsy, { HOC } from 'formsy-react';
import styled, { css } from 'styled-components'

import { Box } from '../styled-grid'
import theme from '../theme'
import LaddaButton from '../Shared/LaddaButton.js'
import { Text } from '../styled-elements/Text'
import {
  Form,
  SuccessMessage,
} from '../Shared/Form';


const Root = styled(Box)`
  background-color: white;
  border: 1px solid ${theme.colors.brand};
`;

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      messageSent: false,
      canSubmit: false,
      loading: false,
    };
  }

  async handleSubmit(model) {
    this.setState({
      loading: true,
    });

    await this.props.submit(model);

    this.setState({
      messageSent: true,
      loading: false,
    });
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render() {
    return (
      <Root>
        <Box p={[ 2, 3 ]}>
          { this.state.messageSent
            ?  <SuccessMessage>Thank you! We'll get back to you soon.</SuccessMessage>
            : null
          }

          <Form
            onValidSubmit={this.handleSubmit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            method={this.props.method}
            action={this.props.action}
          >
            {this.props.children}

            <Text align='right'>
              <LaddaButton primary loading={this.state.loading} type='submit' disabled={!this.state.canSubmit}>Send</LaddaButton>
            </Text>
          </Form>
        </Box>
      </Root>
    );
  }
}

FormContainer.propTypes = {
  children: PropTypes.element.isRequired,
  submit: PropTypes.func.isRequired,
};

export default FormContainer;
