import { StyleSheet, View, Image, FlatList, Pressable, Linking } from 'react-native';
import products from '../data/products';

export default function ProductScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Image
          source={{
            uri: 'https://i.shgcdn.com/85c1d768-d383-4a36-8fe4-6f7300ab95ee/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
          }}
          style={styles.image}
        />
      }
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() => Linking.openURL('https://www.nike.com/w?q=' + item.name)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
});