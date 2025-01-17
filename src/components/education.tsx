import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { styles } from "@/style";
import type { Resume } from "@/resume";

export function Education({ content }: {content: Resume}){
  return (
    <View style={styles.section}>
      <Text style={styles.section_title}>
        { content.educations.title }
      </Text>

      <View style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px"
      }}>
        { content.educations.items.map(item => {
          return (
            <View key={item.school} style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
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