"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

export default function TabMenu() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: "IVE", content: "IVEのメンバー情報" },
        { name: "NMIXX", content: "NMIXXのメンバー情報" },
        { name: "BABYMONSTER", content: "BABYMONSTERのメンバー情報" }
    ];

    return (
        <section className={styles.tabMenu}>
            <h1 className={styles.title}>KPOPグループメンバー紹介</h1>
            <div className={styles.tabs}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                <p>{tabs[activeTab].content}</p>
            </div>
        </section>
    );
};
