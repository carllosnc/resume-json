import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { styles } from "@/style";
import type { Resume } from "@/resume";

const localStyles = StyleSheet.create({
  info: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
  }
})

export function PersonalInfo({ content }: { content: Resume }) {
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        { content.personal_info.title }
      </Text>
      <View style={styles.section_sub}>
        {
          content.personal_info.info.map((item, index) => {
            return (
              <View key={`${index}-${item}`} style={localStyles.info}>
                <Text style={styles.text}>{ item }</Text>
                {
                  index !== content.personal_info.info.length - 1 &&
                  <Text style={styles.text}>•</Text>
                }
              </View>
            )
          })
        }
      </View>
    </View>
  );
}