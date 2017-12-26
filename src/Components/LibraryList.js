import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ListView, View, Text } from 'react-native';
import Cardsection from './Cardsection';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource =ds.cloneWithRows(this.props.libraries); 
    }
    
        renderRow(library) {
           return <ListItem library = {library}/>;
          }
    
          render() {
            return (
              <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
              />
            );
          }
}
const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15
    }
  };
const mapStateToProps = (store) => {
    return {
        libraries:store.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);