import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class SemanticModal extends React.Component {
  confirmClick = (event, data) => {
    console.log("Passed in prop value: " + this.props.valueIntoModal);
    this.props.handleClose();
  }

  render () {
    return (
      <React.Fragment>
        <Modal open={this.props.modalOpen} size='small' closeOnEscape={true} closeOnRooNodeClick={true}>
          <Header icon='browser' content='Confirm?' />
          <Modal.Content image>
            <h3>Please confirm</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button negative type='button' icon='remove' labelPosition='right' onClick={this.props.handleClose} content='Cancel' />
            <Button positive type='button' icon='checkmark' labelPosition='right' onClick={this.confirmClick} content='Confirm' />
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

SemanticModal.propType = {
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  valueIntoModal: PropTypes.string.isRequired
}

export default SemanticModal
