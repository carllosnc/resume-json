import { View, Text } from "@react-pdf/renderer"
import { styles } from "@/style"
import type { Resume } from "@/resume-type"

export function Skills({ content }: { content: Resume }) {
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        {content.skills.title}
      </Text>

      <Text style={styles.text}>
        {content.skills.description}
      </Text>

      {
        content.skills.skill_section.map((item, index) => {
          return (
            <View key={`${index}`} style={styles.section_sub}>
              <Text style={styles.text}>
                <Text style={styles.feature}>{item.title} </Text>
                {item.items}
              </Text>
            </View>
          )
        })
      }
    </View>
  )
}