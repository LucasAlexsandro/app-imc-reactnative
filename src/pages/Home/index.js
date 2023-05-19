import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/Title';
import Form from '../../components/Form';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0043',
    paddingTop: 80,
  },
});
