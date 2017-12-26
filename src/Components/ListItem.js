import React, { Component } from 'react';
import {View,Text, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import Cardsection from './Cardsection';
import {connect} from 'react-redux';
import * as actions from '../Actions';
import { bindActionCreators } from 'redux';



class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

  renderDescription() {
      if(this.props.selectedLibraryId === this.props.library.id) {
          return(
              <Cardsection style = {styles.descriptionStyle}>
                  <Text>{this.props.library.description}</Text>
              </Cardsection>
          );
      }
  }
   render() {
    
   return (
    <TouchableWithoutFeedback
     onPress = {() =>this.props.selectLibrary(this.props.library.id)}
    >
        <View>
         
           <Cardsection>
             <Text style={styles.titleStyle}>
                {this.props.library.title}
              </Text>
            </Cardsection>
          
          {this.renderDescription()}
         
        </View>
    </TouchableWithoutFeedback>
     
    );
  }
}
const mapStateToProps = (store) => {
    return {
        selectedLibraryId:store.selectedLibraryId
    };
};



const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};



export default connect(mapStateToProps,actions) (ListItem);