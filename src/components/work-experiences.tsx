import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { styles } from "@/style";
import type { Resume } from "@/resume";

const localStyles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  content_item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    justifyContent: 'space-between',
  }
})

export function WorkExperiences({ content }: { content: Resume }) {
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        { content.work_experiences.title }
      </Text>
      {
        content.work_experiences.experiences.map((item, index) => {
          return (
            <View key={`${index}`} style={localStyles.content}>
              <View style={localStyles.content_item}>
                <Text style={styles.feature}>
                  { item.company } | { item.position }
                </Text>

                <Text style={styles.feature}>
                  { item.start_date } - { item.end_date }
                </Text>
              </View>
              <View style={localStyles.content}>
                {item.description.map((description, index) => {
                  return (
                    <Text key={`${index}`} style={styles.text}>
                      • { description }
                    </Text>
                  )
                })}
              </View>
            </View>
          )
        })
      }
    </View>
  )
}