import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import IntroMike from '../components/HomepageFeatures/IntroMike';
import Works from '../components/HomepageFeatures/Works';
import Experience from '../components/HomepageFeatures/Experience';
import Skills from '../components/HomepageFeatures/Skills';
import AboutMe from '../components/HomepageFeatures/AboutMe';



export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <IntroMike/>
        <Experience/>
        <Skills/>
        <Works/>
        <AboutMe/>
      </main>
    </Layout>
  );
}
