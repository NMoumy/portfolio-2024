import React from "react";
import styles from "../styles/pages/home.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.display}>Moumy Ndiaye</h1>

        <div>
          <Image src="/moumy.png" width={500} height={500} alt="Picture of me" />
          
          <div className={styles.infoBlock}>
            <div className={styles.separator} />

            <p className={styles.lead}>Développeuse web front-end</p>

            <Link href="/contact">Me contacter</Link>

            <div className={styles.containerIcon}>
              <a href="https://www.linkedin.com/in/moumy-ndiaye-31988b290/" target="_blank">
                <Image src="/linkedin.png" width={30} height={30} alt="LinkedIn" />
              </a>

              <a href="https://github.com/NMoumy" target="_blank">
                <Image src="/github.png" width={30} height={30} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
