import React from 'react';
import styled from 'styled-components'
import { Flex } from '../styled-grid'
import { FormHeader } from '../Sharedy/Form.js'

const Label = styled.a`
  flex-grow: 1;
  flex-basis: 0;
`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };
  }

  _renderTitles() {
    function labels(child, idx) {
      const isSelected = this.state.selected === idx;

      return (
        <Label onClick={this.onClick.bind(this, idx)} href='#'>
          <FormHeader role='tab' key={idx} aria-controls={`panel${idx}`} inactive={!isSelected}>{child.props.label}</FormHeader>
        </Label>
      );
    }

   return (
      <Flex role='tablist'>
        {this.props.children.map(labels.bind(this))}
      </Flex>
    );
  }

  onClick(index, event) {
    event.preventDefault();

    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div>
        {this._renderTitles()}

        <div>
          {this.props.children[this.state.selected]}
        </div>
      </div>);
  }
}

const Pane = (props) => {
  return <div>{props.children}</div>;
}

export {
  Tabs,
  Pane,
};
