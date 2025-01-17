import {
  StyleSheet,
} from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    display: 'flex',
    gap: '8px',
    padding: '20px'
  },
  name: {
    fontSize: "20px",
    fontFamily: "Times-Bold",
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  position: {
    fontSize: "12px"
  },
  link: {
    fontSize: "12px",
    color: "#0000ff"
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  section_sub: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '5px',
  },
  section_title: {
    fontFamily: "Times-Bold",
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  line: {
    width: '100%',
    height: '1px',
    backgroundColor: '#000000',
  },
  feature: {
    fontFamily: "Times-Bold",
    fontSize: "12px",
  },
  text: {
    fontSize: "12px",
  }
})