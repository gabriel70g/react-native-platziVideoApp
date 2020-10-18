import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Separator from '../../sections/containers/HorizontalSeparator';
import Category from '../components/Category';
import Empty from '../../screens/components/Empty';
import Layout from '../../videos/components/CategoryListLayout'


class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => <Category {...item} />;
  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <Layout
      title='Categorias'
      >
        <FlatList
          horizontal
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

export default CategoryList;
