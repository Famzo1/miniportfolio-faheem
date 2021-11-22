import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Popup from 'reactjs-popup'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Faheems portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Faheem&apos;s Portfolio Page
        </h1>
       

        <div className={styles.grid}>
          <div className={styles.card}> 
            <h2>About me </h2>
              <p>I am a final year Bcom Informatics student at the University of Pretoria.
              Now looking for a new opportunity in the IT field. I have worked on multiple projects 
              throughout my studies. I have worked with languages such as C#, Angular, Javascript, HTMl,CSS,
              bootstrap and many others. I have worked with programs such as Visual Studio 2014-2019 as well as
              Visual Studio Code, SQL Server management, Power Designer and many others. For more information
              view my CV below.
              </p>
              <a className="button" color="primary" round href="/Faheem Ghafoor CV.pdf">View My CV</a>
          </div>
            
           

          <div className={styles.card}>
            <h2>Why would I want to become a developer?</h2>
            <p>Since my school years, I have always wanted to study Informatics. I had this craze for 
              programming, that time in computer applications technology I would play around with Notepad++
              and learn how to use different types of HTML and CSS. Being a developer to me, means a lot in 
              terms of growth, facing a different problem, finding effective solutions is what drives me to 
              learn programming. It challenges my inner soul to do better and to be better than what I was 
              yesterday. 
            </p>
            <Popup trigger={<button> for more information click here </button>} position="right center">
           <div>
           <a className="button" href="/Faheem Ghafoor Cover Letter.pdf">Viewmy cover letter</a>
           
           </div>
           </Popup>
          </div>
          <div className={styles.card}> 
            <h2>Picture of me</h2>
            <Image src="/Famzo.jpeg" alt="Picture of me" width={500} height={500} />
            <a className="button" href="https://github.com/Famzo1/miniportfolio-faheem">View my GIT repository</a>
            
          </div>
          
          

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
