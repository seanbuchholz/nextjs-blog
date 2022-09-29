import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'
import React, { useState } from 'react'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {



  const [steps, setSteps] = useState([
      {
        target: '.jr-1',
        content: 'This is the first step'
      },
      {
        target: '.jr-2',
        content: 'This is the second step'
      }
    ])

    const [locale, setLocale] = useState({
      last: 'End'
    })

    const [options, setOptions] = useState({
      primaryColor: '#2071d1',
      overlayColor: 'rgba(0,0,0,0.8)',
    })

    const [stepIndex, setStepIndex] = useState(0)

    const [run, setRun] = useState('false')

    function handleJoyrideCallback(data) {
      const { action, index, status, type } = data;

      if ([ EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND ].includes(type)) {
        setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1))
      }
      else if ([STATUS.SKIPPED].includes(status)) {
        console.log('SKIPPED!')
        setRun('false')
      } else if ([STATUS.FINISHED].includes(status)) {
        console.log('TOUR END!')
        setRun('false')
      }
    }

  return (
    <Layout home>
      <Joyride
        run={run}
        steps={steps}
        continuous
        showProgress
        showSkipButton
        locale={locale}
        styles={{options}}
        stepIndex={stepIndex}
        callback={handleJoyrideCallback} />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='jr-1'>Hi, I'm Sean. This is my intro.</p>
        <p className='jr-2'>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (<li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}