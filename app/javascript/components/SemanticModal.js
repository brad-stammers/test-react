import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class SemanticModal extends React.Component {
  confirmClick = (event, data) => {
    console.log("Passed in prop value: " + this.props.valueIntoModal);
    this.props.handleClose();
  }

  render () {
    let formFields = {};
    return (
      <React.Fragment>
        <Modal open={this.props.modalOpen} size='small' closeOnEscape={true} closeOnRootNodeClick={true}>
          <Header content='New Fruit' />
          <Modal.Content image>
            <form onSubmit={ (e) => {
              this.props.handleFormSubmit(formFields.name.value, formFields.desc.value); 
              e.target.reset();
            }}>
              <div class="field">
                <label>Name</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.name = input} placeholder="Fruit name" /></div>
                </div>
              </div>
              <div class="field">
                <label>Description</label>
                <div class="seven wide field">
                <div class="ui input"><input type="text" ref={input => formFields.desc = input} placeholder="Fruit description" /></div>
                </div>
              </div>
           </form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative type='button' icon='remove' labelPosition='right' onClick={this.props.handleClose} content='Cancel' />
            <Button positive type='button' icon='checkmark' labelPosition='right' onClick={this.handleFormSubmit} content='Save' />
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
