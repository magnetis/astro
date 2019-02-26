import React from "react";

export default () => (
  <div className="cards-box">
    <div>
      <h3>atomic</h3>

      <p>
        Astro is built based on <b>Atomic Design</b>, so our designers and
        developers can use its style set and components to enhance our product
        interface, as a <b>modular system</b> that can be easily <b>managed and updated</b>.
      </p>
    </div>

    <div>
      <h3>open</h3>

      <p>
        Magnetis believes that good design and experiences can   <b>impact the product market and society itself</b>. Our <b>design and code assets are open</b> so we can contribute to the
        community and help new product teams.
      </p>
    </div>

    <div>
      <h3>accessible</h3>

      <p>
        Design is meant to be <b>for all</b>. Astro style and components follow
        basic recommendations from the <b>WCAG guidelines</b> for accessibility,
        with tested contrast ratios and good practices in legibility and screen
        reading solutions.
      </p>
      <a href="https://www.w3.org/TR/WCAG21/">See WCAG >></a>
    </div>
  </div>
);
