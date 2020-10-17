import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/SuggestioListLayout';
import Empty from '../../screens/components/Empty';
import Separator from '../../screens/components/VerticalSeparator';
import Suggestion from '../components/Suggestion'


class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :(" />;

  itemSeparator = () => <Separator />;

  renderItem = ({item}) => {
    return ( <Suggestion {...item} />
    )
  }

  render() {
    const list = [
      {title: 'Avengers', key: '1'},
      {
        title: 'Literna verde',
        key: '2',
      },
    ];

    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
