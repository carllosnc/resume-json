import type { Resume } from '@/resume-type'
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
import { WorkExperiences } from '@/components/work-experiences'
import { Education } from '@/components/education'
import { Extras } from '@/components/extras'
import { checkContent } from '@/check-resume'

const file = Bun.file(process.argv[2]);
const content: Resume = await file.json();
const fileName = `RESUME-${content.name.replaceAll(" ", "-")}`;

function getCurrentPath() {
  if (process.platform === "win32") {
    return `${process.cwd()}\\`
  }

  return process.cwd();
}

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

      {
        content.educations && (content.educations?.items?.length > 0) &&
        <>
          <View style={styles.line} />
          <Education content={content} />
        </>
      }

      {
        content.extras && (content.extras?.items?.length > 0) &&
        <>
          <View style={styles.line} />
          <Extras content={content} />
        </>
      }
    </Page>
  </Document>
);

console.log(`🎉 Resume for ${content.name} generated`);
console.log(`📄 ${getCurrentPath()}${fileName}.pdf`);
console.log(`😎 Designed and coded by Carlos Costa`);
console.log(`📂 Repo: https://github.com/carllosnc/resume-json`)

render(<MyDocument />, `./${fileName}.pdf`);
