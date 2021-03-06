import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/SuggestioListLayout';
import Empty from '../../screens/components/Empty';
import Separator from '../../screens/components/VerticalSeparator';
import Suggestion from '../components/Suggestion'


class SuggestionList extends Component {

  renderEmpty = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) =>  <Suggestion {...item} />
  keyExtractor = item => item.id.toString();

  render() {


    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
