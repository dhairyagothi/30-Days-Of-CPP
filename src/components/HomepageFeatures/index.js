import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Structured Curriculum",
    Svg: require("@site/static/img/structured_curriculum.svg").default,
    description: (
      <>
        Clear 30-day plan, daily lessons covering essential C++ concepts in an
        organized, progressive manner.
      </>
    ),
  },
  {
    title: "Comprehensive Documentation",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Detailed guides with explanations, code samples, and resources aiding
        better understanding of <code>C++</code> topics.
      </>
    ),
  },

  {
    title: "We Are Open Source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Accessible collaborative C++ project, providing hands-on experience and
        opportunities for practical learning and contributions.
      </>
    ),
  },

  {
    title: "Free Access",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Entire program, resources, and materials accessible at no cost, ensuring
        inclusivity for all interested learners.
      </>
    ),
  },

  {
    title: "Informative Blogs",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Regularly updated blogs covering diverse C++ topics, offering
        supplementary insights and knowledge beyond lessons.
      </>
    ),
  },

  {
    title: "Community Engagement",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Supportive community fostering interaction, collaboration, and learning
        through discussions and shared experiences among participants.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}