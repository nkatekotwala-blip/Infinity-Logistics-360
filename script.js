/* INFINITY LOGISTICS 360 - COMPANY PROFILE */

.blue-line {
  width: 80px;
  height: 4px;
  background: #1768b5;
  margin: 18px 0 28px;
}

.blue-line.centered {
  margin: 18px auto 28px;
}

.company-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  align-items: center;
  background: #f5f7fa;
  color: #101b31;
}

.company-overview .eyebrow,
.vision-values .eyebrow {
  color: #1768b5;
}

.company-overview h2 span {
  color: #1768b5;
}

.overview-slogan {
  font-size: clamp(1.25rem, 2.5vw, 1.8rem);
  line-height: 1.65;
  margin-bottom: 25px;
  color: #101b31;
}

.overview-slogan span {
  color: #1768b5;
}

.overview-copy > p {
  margin: 18px 0;
  line-height: 1.9;
  color: #333d4b;
}

.overview-panel {
  background: linear-gradient(145deg, #123f83, #071e46);
  padding: 30px;
  border-radius: 20px;
  color: #fff;
  box-shadow: 0 15px 35px #071e4620;
}

.overview-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px solid #ffffff40;
}

.overview-item:first-child { padding-top: 0; }
.overview-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.round-icon, .quality-icon, .value-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(145deg, #287de0, #092b69);
  border: 1px solid #a6c9f5;
  border-radius: 50%;
  font-weight: bold;
}

.round-icon {
  width: 54px;
  height: 54px;
  font-size: 1.6rem;
}

.overview-item h3 {
  font-size: 1rem;
  margin-bottom: 5px;
}

.overview-item p,
.overview-item strong {
  font-size: .91rem;
  color: #e5edf8;
}

.driver-model {
  display: flex;
  align-items: center;
  gap: 28px;
  background: #eaf1fb;
  color: #10284e;
  border-top: 1px solid #c8d7eb;
  border-bottom: 1px solid #c8d7eb;
}

.driver-model .eyebrow { margin-bottom: 8px; }

.driver-model h2 { color: #123e82; }

.driver-model p {
  font-size: 1.05rem;
  line-height: 1.9;
  max-width: 850px;
}

.driver-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 95px;
  height: 95px;
  background: #123e82;
  border: 4px solid #c1d9f7;
  border-radius: 50%;
  font-size: 2.7rem;
}

.who-we-are {
  background: #fff;
  color: #15223b;
}

.who-we-are .eyebrow { color: #1768b5; }

.who-intro {
  max-width: 900px;
  margin: auto;
  color: #354153;
  font-size: 1.08rem;
  line-height: 1.9;
}

.qualities-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  max-width: 1100px;
  margin: auto;
}

.quality-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.quality-icon {
  width: 62px;
  height: 62px;
  font-size: 1.7rem;
}

.quality-card h3 {
  color: #174b96;
  margin-bottom: 7px;
  font-size: 1.05rem;
}

.quality-card p {
  color: #384353;
  line-height: 1.8;
}

.vision-values {
  color: #12213b;
  background: linear-gradient(145deg, #f4f7fc, #e7eef8);
}

.vision-values .section-heading { margin-bottom: 35px; }

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.vision-column { display: flex; flex-direction: column; gap: 32px; }

.vision-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.vision-card h3,
.values-heading {
  color: #174b96;
  margin-bottom: 12px;
}

.vision-card p { line-height: 1.9; color: #354153; }

.values-column {
  padding-left: 32px;
  border-left: 1px solid #c3cedd;
}

.values-heading {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.value-item {
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #cbd5e2;
}

.value-item:last-child { border-bottom: none; }

.value-icon {
  width: 48px;
  height: 48px;
  font-size: 1.4rem;
}

.value-item h4 {
  color: #174b96;
  font-size: .95rem;
  margin-bottom: 3px;
}

.value-item p { color: #354153; font-size: .91rem; }

@media (max-width: 760px) {
  .company-overview,
  .vision-grid {
    grid-template-columns: 1fr;
  }

  .overview-panel { padding: 23px; }

  .driver-model {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .qualities-grid { grid-template-columns: 1fr; }

  .values-column {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid #c3cedd;
    padding-top: 28px;
  }

  .overview-item { gap: 13px; }
}
