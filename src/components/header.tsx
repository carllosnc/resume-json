import {
  Text,
  View,
} from '@react-pdf/renderer';
import { styles } from '@/style';
import type { Resume } from '@/resume';

export function Header({ content }: { content: Resume }) {
  return (
    <View style={styles.header}>
      <Text style={styles.position}>
        {content.header.position}
      </Text>
      <Text style={styles.link}>
        {content.header.website}
      </Text>
      <Text style={styles.link}>
        {content.header.github}
      </Text>
      <Text style={styles.link}>
        {content.header.linkedin}
      </Text>
    </View>
  );
}