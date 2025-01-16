import React from 'react';
import ReactDOM from 'react-dom';
import {
  PDFViewer,
  render,
  Text,
  Page,
  View,
  Document,
  StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '20px'
  },
  position: {
    fontSize: "15px"
  }
})

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text> Carlos Nascimento Costa </Text>
      </View>
      <View>
        <Text> Front-end / UI-UX </Text>
        <Text> carlosnc.com.br </Text>
        <Text> github.com/carllosnc </Text>
        <Text> linkedin.com/carllosnc </Text>
      </View>
    </Page>
  </Document>
);

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

render(<MyDocument />, `${__dirname}/example.pdf`);
