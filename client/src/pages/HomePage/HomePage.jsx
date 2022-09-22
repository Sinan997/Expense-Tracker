import React from "react";
import classes from "./HomePage.module.css";
import dairesel from "../../assets/dairesel.jpg";
import debtAndCredit from "../../assets/debtandcredit.jpg";
import friends from "../../assets/friends.jpg";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <section className={classes.section}>
          <div className={classes.sectionTitle}>Track your own Expenses</div>
          <div className={classes.sectionDescription}>
            <div className={classes.sectionImage}>
              <img src={dairesel} alt="grafik" />
            </div>
            <div className={classes.sectionInformation}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              iure quae veritatis voluptatum cumque temporibus impedit assumenda
              porro voluptas. Ad, asperiores? Recusandae fuga perspiciatis,
              voluptates sed quisquam consequatur laudantium? Velit!
            </div>
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.sectionTitle}>Manage debt and credit!</div>
          <div className={classes.sectionDescription}>
            <div className={classes.sectionImage}>
              <img src={debtAndCredit} alt="grafik" />
            </div>
            <div className={classes.sectionInformation}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              iure quae veritatis voluptatum cumque temporibus impedit assumenda
              porro voluptas. Ad, asperiores? Recusandae fuga perspiciatis,
              voluptates sed quisquam consequatur laudantium? Velit!
            </div>
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.sectionTitle}>
            Invite your friends to site and let us track your expenses!
          </div>
          <div className={classes.sectionDescription}>
            <div className={classes.sectionImage}>
              <img src={friends} alt="grafik" />
            </div>
            <div className={classes.sectionInformation}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              iure quae veritatis voluptatum cumque temporibus impedit assumenda
              porro voluptas. Ad, asperiores? Recusandae fuga perspiciatis,
              voluptates sed quisquam consequatur laudantium? Velit!
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
