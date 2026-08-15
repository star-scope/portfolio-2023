import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { Toaster, toast } from 'sonner';
import Head from 'next/head'
import type { GetServerSideProps } from 'next';

// Styles
import styles from "../pages/work.module.css";

// Components
import BackButtonHeader from '../src/components/nav/backHeader'
import WorkCard from "../src/components/cards/workCard";

import { WORK_COOKIE_NAME, isValidWorkAccessToken } from '../src/lib/workAuth';
import { WORK_ITEMS, type WorkItem } from '../src/lib/workItems';

interface WorkProps {
  initialHasAccess: boolean;
  initialItems: WorkItem[];
}

export const getServerSideProps: GetServerSideProps<WorkProps> = async (context) => {
  const token = context.req.cookies[WORK_COOKIE_NAME];
  const hasAccess = isValidWorkAccessToken(token);
  return {
    props: {
      initialHasAccess: hasAccess,
      // Only travels to the browser once the cookie checks out.
      initialItems: hasAccess ? WORK_ITEMS : [],
    },
  };
};

const Work: React.FC<WorkProps> = ({ initialHasAccess, initialItems }) => {
  const [hasAccess, setHasAccess] = useState(initialHasAccess);
  const [items, setItems] = useState<WorkItem[]>(initialItems);
  const [submitting, setSubmitting] = useState(false);

  const handlePasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredPassword = (e.target as any).password.value;

    if (enteredPassword.trim() === '') {
      toast.dismiss();
      toast.error('Please enter a password');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/auth/work', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: enteredPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        setItems(data.items ?? []);
        setHasAccess(true);
      } else {
        toast.dismiss();
        toast.error('Password Incorrect');
      }
    } catch {
      toast.dismiss();
      toast.error('Something went wrong, please try again');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {hasAccess ? (
          <>
          <Head>
            <title>Caleb Faulkner - Work</title>
          </Head>
          <BackButtonHeader title="PROFESSIONAL WORK" />
          <div id="mainContainer">
            <main id="workContainer">
              {items.map((item) =>
                item.href ? (
                  <Link key={item.title} id={styles.link} href={item.href} target="_blank" rel="noopener noreferrer">
                    <WorkCard id="section1" title={item.title} subtitle={item.subtitle} image={item.image}/>
                  </Link>
                ) : (
                  <a key={item.title} id={styles.link}>
                    <WorkCard id="section1" title={item.title} subtitle={item.subtitle} subtitle2={item.subtitle2} image={item.image}/>
                  </a>
                )
              )}
            </main>
          </div>
      </>
    ) : (
      <div className={styles.passwordWrapper}>
        <Head>
          <title>Caleb Faulkner - Work</title>
        </Head>
        <img id="logo" src="/images/Logo.png" alt="Logo" />
        <h1 id="section1">PLEASE ENTER PASSWORD</h1>
        <form className={styles.form} onSubmit={handlePasswordSubmit}>
          <input className={styles.input} id="section2" type="password" name="password"/>
          <div className={styles.buttonWrapper} id="section3">
            <button className={styles.button} type="submit" disabled={submitting}>SUBMIT</button>
          </div>
        </form>
        <Toaster toastOptions={{className: 'toast',}} position="top-right" richColors closeButton theme="dark" />
      </div>
    )}
  </>
);
};

export default Work;