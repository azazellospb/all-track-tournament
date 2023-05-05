import React from 'react'
import { Layout, Button } from 'antd'
import { useTitle } from 'src/shared/lib/dom'
import { Header } from 'src/widgets/header'
import Section from './section'
import styles from './styles.module.scss'

const { Content } = Layout

const HeroSection = () => (
  <Section className={styles.hero} innerClassName={styles.heroContent}>
    <h2>Букшеринг</h2>
    <p>
      Наш сервис позволяет людям обмениваться книгами. Владелец книги может отдать её сервису, чтобы предложить желающим
      арендовать её.
    </p>
    <p>
      Книгу можно отдать навсегда или на время. Желающие могут пользоваться книгой выбранный срок и платят за это
      меньше, чем книга стоит в магазине.
    </p>
    <Button size="large">Попробовать</Button>
  </Section>
)

const BenefitsSection = () => (
  <Section className={styles.hero} innerClassName={styles.heroContent}>
    <h2>Букшеринг</h2>
    <p>
      Наш сервис позволяет людям обмениваться книгами. Владелец книги может отдать её сервису, чтобы предложить желающим
      арендовать её.
    </p>
    <p>
      Книгу можно отдать навсегда или на время. Желающие могут пользоваться книгой выбранный срок и платят за это
      меньше, чем книга стоит в магазине.
    </p>
    <Button size="large">Попробовать</Button>
  </Section>
)

const FeaturesSection = () => (
  <Section className={styles.hero} innerClassName={styles.heroContent}>
    <h2>Букшеринг</h2>
    <p>
      Наш сервис позволяет людям обмениваться книгами. Владелец книги может отдать её сервису, чтобы предложить желающим
      арендовать её.
    </p>
    <p>
      Книгу можно отдать навсегда или на время. Желающие могут пользоваться книгой выбранный срок и платят за это
      меньше, чем книга стоит в магазине.
    </p>
    <Button size="large">Попробовать</Button>
  </Section>
)

const SocialSection = () => (
  <Section className={styles.hero} innerClassName={styles.heroContent}>
    <h2>Букшеринг</h2>
    <p>
      Наш сервис позволяет людям обмениваться книгами. Владелец книги может отдать её сервису, чтобы предложить желающим
      арендовать её.
    </p>
    <p>
      Книгу можно отдать навсегда или на время. Желающие могут пользоваться книгой выбранный срок и платят за это
      меньше, чем книга стоит в магазине.
    </p>
    <Button size="large">Попробовать</Button>
  </Section>
)

const About = () => {
  useTitle('About Project')
  return (
    <Layout>
      <Header />
      <Content>
        <HeroSection key="hero_0" />
        <BenefitsSection key="hero_1" />
        <FeaturesSection key="hero_2" />
        <SocialSection key="hero_3" />
      </Content>
    </Layout>
  )
}

export default About
