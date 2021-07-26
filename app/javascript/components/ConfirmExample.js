import React from "react"
import PropTypes from "prop-types"
import { Confirm } from "react-st-modal" 

class ConfirmExample extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <button class="ui small primary basic button" onClick={async () => {
            const result = await Confirm('Confirmation text', 'Confirmation title');
            if (result) {
              //Confirmaiton required
            } else {
              //confirmation not confirmed
            }
          }}
          >
            Show confirm
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmExample
