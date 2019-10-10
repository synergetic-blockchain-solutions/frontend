import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash'; // 4.0.8

const withPreventDoubleClick = WrappedComponent => {
  class PreventDoubleClick extends React.Component {
    debouncedOnClickEvent = () => {
      this.props.clickEvent && this.props.clickEvent();
    };

    onClickEvent = debounce(this.debouncedOnClickEvent, 1000, {
      leading: true,
      trailing: false,
    });

    render() {
      return (
        <WrappedComponent {...this.props} onClickEvent={this.onClickEvent} />
      );
    }
  }

  PreventDoubleClick.propTypes = {
    clickEvent: PropTypes.func.isRequired,
  };

  return PreventDoubleClick;
};

export default withPreventDoubleClick;
