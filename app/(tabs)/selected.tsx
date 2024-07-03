import {FlatList, StyleSheet} from 'react-native';

import {View} from '@/components/Themed';
import ItemElement from "@/components/ItemElement";
import {useItemContext} from "@/app/hooks/useItemContext";
import {useMemo} from "react";

export default function SelectedScreen() {
  const {toggleItem, items} = useItemContext()
  const itemsSelected = useMemo(() => items.filter((i) => i.isActive), [items])

  return (
      <View style={styles.container}>
        <FlatList data={itemsSelected}
                  contentContainerStyle={styles.list}
                  renderItem={({item}) => <ItemElement item={item} onPress={() => toggleItem(item)}/>}/>
      </View>
  );
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
