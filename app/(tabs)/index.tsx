import {FlatList, StyleSheet} from 'react-native';
import {View} from '@/components/Themed';
import ItemElement from "@/components/ItemElement";
import {useItemContext} from "@/app/hooks/useItemContext";


export default function TabOneScreen() {
  const {toggleItem, items} = useItemContext()

  return (
      <View style={styles.container}>
        <FlatList data={items}
                  extraData={items}
                  contentContainerStyle={styles.list}
                  renderItem={({item}) => <ItemElement item={item} onPress={() => toggleItem(item)}/>}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  list: {
    flexGrow: 1,
  }
});
