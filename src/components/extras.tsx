import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { styles } from "@/style";
import type { Resume } from "@/resume-type";

const localStyles = StyleSheet.create({
  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
})

export function Extras({ content }: {content: Resume}){
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        { content.extras.title }
      </Text>

      <View style={localStyles.items}>
        {
          content.extras.items.map((item, index) => {
            return (
              <Text key={`${index}`} style={styles.text}>
                • { item }
              </Text>
            )
          })
        }
      </View>
    </View>
  )
}