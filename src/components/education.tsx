import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { styles } from "@/style";
import type { Resume } from "@/resume";

const localStyles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  content_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export function Education({ content }: {content: Resume}){
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        { content.educations.title }
      </Text>

      <View style={localStyles.content}>
        { content.educations.items.map(item => {
          return (
            <View key={item.school} style={localStyles.content_item}>
              <View>
                <Text style={styles.feature}> • { item.school } - {item.location} </Text>
                <Text style={styles.text}>{ item.degree } </Text>
              </View>
              <Text style={styles.feature}>
                { item.start_date } - { item.end_date }
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}