import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ReactionsTab from './Subcomponents/ReactionsTab/ReactionsTab';
import NewsTab from './Subcomponents/NewsTab/NewsTab';
import RelatedTab from './Subcomponents/RelatedTab/RelatedTab';
import TabButton from './Subcomponents/TabButton';

function Tabs({ data: { news, reactions, related } }) {
  const [currTab, setCurrTab] = useState('news');

  const tabOptions = [
    { label: 'Research & News', id: 'news' },
    { label: 'Reactions', id: 'reactions' },
    { label: 'Related', id: 'related' },
  ];

  function switchTabs(tabName) {
    switch (tabName) {
      case 'news':
        return <NewsTab data={news} />;
      case 'reactions':
        return <ReactionsTab data={reactions} />;
      case 'related':
        return <RelatedTab data={related} />;
      default:
        return <NewsTab data={news} />;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.tabSwitcher}>
        {tabOptions.map((option) => (
          <TabButton
            selected={currTab === option.id}
            onPress={() => setCurrTab(option.id)}
            key={option.id}
          >
            {option.label}
          </TabButton>
        ))}
      </View>
      <View style={styles.tabContent}>{switchTabs(currTab)}</View>
    </View>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  tabSwitcher: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    zIndex: 10,

    shadowColor: '#BDC5CD',
    shadowOffset: {
      width: 0,
      height: 0.66,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 5,
  },
  tabContent: {
    flexGrow: 1,
  },
});
