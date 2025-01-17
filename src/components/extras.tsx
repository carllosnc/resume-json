import { View, Text } from "@react-pdf/renderer";
import { styles } from "@/style";
import type { Resume } from "@/resume";

export function Extras({ content }: {content: Resume}){
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        { content.extras.title }
      </Text>

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
  )
}