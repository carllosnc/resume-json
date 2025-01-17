import type { Resume } from '@/resume'
import {
  render,
  Text,
  Page,
  View,
  Document,
} from '@react-pdf/renderer';
import { styles } from '@/style'
import { Header } from '@/components/header'
import { PersonalInfo } from '@/components/personal-info'
import { Skills } from '@/components/skills'
import { WorkExperiences } from '@/components/work_experiences'
import { Education } from '@/components/education'
import { Extras } from '@/components/extras'

import { checkContent } from '@/check-resume'

const file = Bun.file(process.argv[2]);
const content: Resume = await file.json();

checkContent(content);

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.name}>
          {content.name}
        </Text>
      </View>

      <Header content={content} />
      <View style={styles.line} />
      <PersonalInfo content={content} />
      <View style={styles.line} />
      <Skills content={content} />
      <View style={styles.line} />
      <WorkExperiences content={content} />
      <View style={styles.line} />
      <Education content={content} />
      <View style={styles.line} />
      <Extras content={content} />

    </Page>
  </Document>
);

render(<MyDocument />, `./example.pdf`);
