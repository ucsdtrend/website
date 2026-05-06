import React, { useState } from "react";
import "../../styles/StaticLanding.scss";

// Replace these paths with the actual PNG files
import model from "../../static/dress-to-impress/model.JPEG";

import hat1 from "../../static/dress-to-impress/hat-1.jpg";
import top1 from "../../static/dress-to-impress/top-1.jpg";
import top2 from "../../static/dress-to-impress/top-2.jpg";
import bottom1 from "../../static/dress-to-impress/bottom-1.jpg";
import shoes1 from "../../static/dress-to-impress/shoes-1.jpg";
import accessory1 from "../../static/dress-to-impress/accessory-1.jpg";

const clothingItems = [
  {
    id: "hat-1",
    name: "Hat",
    category: "hat",
    image: hat1,
    x: 168,
    y: 28,
    width: 120,
  },
  {
    id: "top-1",
    name: "Top 1",
    category: "top",
    image: top1,
    x: 145,
    y: 155,
    width: 170,
  },
  {
    id: "top-2",
    name: "Top 2",
    category: "top",
    image: top2,
    x: 145,
    y: 155,
    width: 170,
  },
  {
    id: "bottom-1",
    name: "Bottom",
    category: "bottom",
    image: bottom1,
    x: 145,
    y: 300,
    width: 170,
  },
  {
    id: "shoes-1",
    name: "Shoes",
    category: "shoes",
    image: shoes1,
    x: 162,
    y: 505,
    width: 135,
  },
  {
    id: "accessory-1",
    name: "Accessory",
    category: "accessory",
    image: accessory1,
    x: 250,
    y: 190,
    width: 90,
  },
];

const categories = [
  {
    label: "Headwear",
    value: "hat",
  },
  {
    label: "Tops",
    value: "top",
  },
  {
    label: "Bottoms",
    value: "bottom",
  },
  {
    label: "Shoes",
    value: "shoes",
  },
  {
    label: "Accessories",
    value: "accessory",
  },
];

export default function StaticLanding() {
  const [outfit, setOutfit] = useState([]);
  const [activeCategory, setActiveCategory] = useState("top");

  const addClothingItem = (item) => {
    setOutfit((currentOutfit) => {
      const withoutSameCategory = currentOutfit.filter(
        (piece) => piece.category !== item.category
      );

      return [...withoutSameCategory, item];
    });
  };

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("clothingItem", JSON.stringify(item));
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const itemData = event.dataTransfer.getData("clothingItem");

    if (!itemData) {
      return;
    }

    const item = JSON.parse(itemData);
    addClothingItem(item);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeClothingItem = (category) => {
    setOutfit((currentOutfit) =>
      currentOutfit.filter((piece) => piece.category !== category)
    );
  };

  const resetOutfit = () => {
    setOutfit([]);
  };

  const activeItems = clothingItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <main className="dress-page">
      <section className="dress-hero">
        <div className="dress-copy">
          <p className="dress-kicker">TREND</p>
          <h1>Dress Our EIC's!</h1>
          <p className="dress-description">
            Drag pieces onto the models.
          </p>
        </div>

        <div className="dress-game">
          <aside className="wardrobe-panel wardrobe-panel-left">
            <h2>Wardrobe</h2>

            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={
                    activeCategory === category.value ? "active" : ""
                  }
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="clothing-list">
              {activeItems.map((item) => (
                <button
                  key={item.id}
                  className="clothing-item"
                  draggable
                  onDragStart={(event) => handleDragStart(event, item)}
                  onClick={() => addClothingItem(item)}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            <p className="mobile-hint">
              Tap an item on mobile, or drag it on desktop.
            </p>
          </aside>

          <section
            className="model-stage"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="stage-frame">
              <img className="model-base" src={model} alt="Dress up model" />

              {outfit.map((item) => (
                <img
                  key={item.category}
                  className={`worn-piece worn-piece-${item.category}`}
                  src={item.image}
                  alt={item.name}
                  style={{
                    left: `${item.x}px`,
                    top: `${item.y}px`,
                    width: `${item.width}px`,
                  }}
                />
              ))}
            </div>
          </section>

          <aside className="wardrobe-panel wardrobe-panel-right">
            <h2>Current Look</h2>

            <div className="outfit-list">
              {outfit.length === 0 ? (
                <p className="empty-outfit">No pieces added yet.</p>
              ) : (
                outfit.map((item) => (
                  <div className="outfit-row" key={item.category}>
                    <span>{item.name}</span>
                    <button onClick={() => removeClothingItem(item.category)}>
                      remove
                    </button>
                  </div>
                ))
              )}
            </div>

            <button className="reset-look-button" onClick={resetOutfit}>
              Reset Look
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
/*COALESCENCE LANDING PAGE COMPONENT - USE FOR FUTURE ISSUES AS WELL*/
/*
import React, { useEffect, useMemo, useState } from "react";
import landingImg from "../../static/landing/COALESCENCE_LANDING.jpg";
import "../../styles/StaticLanding.scss";
import bg1 from "../../static/youTrend-imgs/img-1.png";
import bg2 from "../../static/youTrend-imgs/img-2.png";
import bg3 from "../../static/youTrend-imgs/img-3.png";
import bg4 from "../../static/youTrend-imgs/img-4.png";
import bg5 from "../../static/youTrend-imgs/img-5.png";
import bg6 from "../../static/youTrend-imgs/img-6.png";
import bg7 from "../../static/youTrend-imgs/img-7.png";
import bg8 from "../../static/youTrend-imgs/img-8.png";
import bg9 from "../../static/youTrend-imgs/img-9.png";
import bg10 from "../../static/youTrend-imgs/img-10.png";
*/
/*
function getTimeLeft(targetMs) {
  const now = Date.now();
  const diff = Math.max(0, targetMs - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { diff, days, hours, minutes, seconds };
}
*/
/*
export default function StaticLanding() {
  const launchDate = useMemo(
    () => new Date("2026-02-13T19:00:00").getTime(),
    []
  );
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(launchDate));
  const [timerVisible, setTimerVisible] = useState(false);
  const [statementVisible, setStatementVisible] = useState(false);
  const [countdownComplete, setCountdownComplete] = useState(false); 
  const [coversVisible, setCoversVisible] = useState(false);


  useEffect(() => {
  const id = setInterval(() => {
    const newTime = getTimeLeft(launchDate);
    setTimeLeft(newTime);
    
    if (newTime.diff === 0) {
      setCountdownComplete(true);
      setTimeout(() => setCoversVisible(true), 100);
    }
  }, 250);
  return () => clearInterval(id);
}, [launchDate]);

  useEffect(() => {
    const el = document.getElementById("launch-timer");
    if (!el) {
      console.log("Timer element not found");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersecting:", entry.isIntersecting);
        setTimerVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("artist-statement");
    if (!el) {
      console.log("Statement element not found");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersecting:", entry.isIntersecting);
        setStatementVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);


  const scrollToTimer = () => {
    const el = document.getElementById("launch-timer");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
*/
  /*
  return (
    <div className="coalescence-page">
      
      <section className="static-landing">
        <img src={landingImg} alt="" className="static-landing__image" />

        <div className="static-landing__overlay">
          <h1 className="static-landing__title">
            <span className="coalesce top">coalescence</span>
            <span className="coalesce middle">coalescence</span>
            <span className="coalesce bottom">coalescence</span>
          </h1>

          <button
            className="static-landing__cta"
            aria-label="Scroll down to launch timer"
            onClick={scrollToTimer}
          >
            <span className="arrow">⌄</span>
          </button>
        </div>
      </section>

      
      <section className="timer-section" id="launch-timer">
        
        <div className="timer-background" aria-hidden="true">
          <div className="bg" style={{ backgroundImage: `url(${bg1})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg2})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg3})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg4})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg5})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg6})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg7})` }} />
          <div className="bg" style={{ backgroundImage: `url(${bg8})` }} />
        </div>

        
        {!countdownComplete && (
          <div className={`timer-section__overlay ${timerVisible ? "fade-in" : ""}`}>
          <div className="timer-section__subtitle">coming soon</div>

          <div className="timer-grid">
            <div className="timer-unit">
              <div className="timer-number">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="timer-label">days</div>
            </div>

            <div className="timer-unit">
              <div className="timer-number">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="timer-label">hours</div>
            </div>

            <div className="timer-unit">
              <div className="timer-number">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="timer-label">minutes</div>
            </div>

            <div className="timer-unit">
              <div className="timer-number">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="timer-label">seconds</div>
            </div>
          </div>

          <div className="timer-section__footer">
            time until TREND’s F/W launch party. <br></br>

            February 13th, 2026, at 7:00 pm at the Multipurpose Room
          </div>
          <button
            className="timer-section__cta"
            aria-label="Scroll to artist statement"
            onClick={() =>
            document
                .getElementById("artist-statement")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        >
  <span className="arrow">⌄</span>
</button>
        </div>
      )}

      {countdownComplete && (
         <div className={`cover-photos-overlay ${coversVisible ? "fade-in" : ""}`}>
      <div className="cover-photos-grid">
        <img src={bg9} alt="Front Cover" className="cover-photo" />
        <img src={bg10} alt="Back Cover" className="cover-photo" />
      </div>
    </div>
      )}

      </section>

      
      <section className="statement-section" id="artist-statement">
        <div className={`statement-section__overlay ${statementVisible ? "fade-in" : ""}`}>
          <h2 className="statement-section__header">
            <span className="statement-name">A Statement from Dan Nepomuceno</span>
            <span className="statement-role">(Co-Editor in Chief)</span>
          </h2>

          <div className="statement-section__body">
            <p>
              When Coalescence first came into fruition, I was inspired by how
              art and all of its mediums— fashion, photography, music,
              literature- have been used to evoke conversations when words fall
              short. It acts as a beacon to uplift marginalized communities, it
              gives voice to those who struggled to speak out, and it creates a
              special place for individuals with similar identities and lived
              experiences to feel like they belong.
            </p>

            <p>
              References like Paris is Burning, Ocean Vuong’s collaboration with
              Peter Do for Helmut Lang, Nan Goldin, and Cupid Deluxe by Blood
              Orange are all based on the notion that somewhere out there, there
              are places where we belong, there are people to resonate with—
              that no matter how “hard” a life may be, everyone deserves the
              chance to be able to live feeling genuine to themeselves and the
              world around them.
            </p>

            <p>
              It’s a collective dream, it’s a collision between inner worlds,
              it’s the workings of fate that cause paths to cross. In essence,
              Coalescence is love and liberation in its highest form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
*/