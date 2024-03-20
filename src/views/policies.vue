<template>
  <main>
    <v-container>
      <section id="overview">
        <h1>Policies and terms of use</h1>
        <p>
          This page is and will be the only official shard of legal document
          that refers to Origin Jumpworks™ and a.f design bureau©.
          <br />
          Do not trust any other source of information. For any question, please
          contact us at this address
          <br />
          -->
          <a href="mailto:hello@origin-jumpworks.space"
            >hello@origin-jumpworks.space</a
          >
        </p>
        <p>
          By using this website, you agree to the following terms of use. Please
          read them carefully before using this website.
        </p>
        <h2>
          Table of content
        </h2>
        <ol>
          <li>
            <a href="#terms">Terms of use</a>
          </li>
          <ol class="sub-level">
            <li>
              <a href="#acceptance">Acceptance of terms</a>
            </li>
            <li>
              <a href="#lisence">Use License</a>
            </li>
            <li>
              <a href="#property">Intellectual Property</a>
            </li>
            <li>
              <a href="#limits">Limitations</a>
            </li>
            <li>
              <a href="#governing-law">Governing Law</a>
            </li>
            <li>
              <a href="#changes">Changes to Terms</a>
            </li>
            <li>
              <a href="#contact-us">Contact us</a>
            </li>
          </ol>
          <li>
            <a href="#privacy">Privacy policy</a>
          </li>
          <li>
            <a href="#cookie">Cookie policy</a>
          </li>
        </ol>
      </section>
      <hr />
      <section id="terms">
        <h2>Terms of Use</h2>
        <p>
          Welcome to Origin Jumpworks! By accessing and using our website, you
          agree to comply with and be bound by the following terms and
          conditions. Please read these terms carefully before using our
          website.
        </p>
        <h3 id="acceptance">1. Acceptance of Terms</h3>
        <p>
          By accessing or using our website, you agree to be bound by these
          Terms of Use. If you do not agree to these terms, please do not use
          our website.
        </p>
        <h3 id="lisence">2. Use License</h3>
        <p>
          You are granted permission to use our website for personal,
          non-commercial purposes only. You may not modify, copy, distribute,
          transmit, display, perform, reproduce, publish, license, create
          derivative works from, transfer, or sell any information, software,
          products, or services obtained from our website.
        </p>
        <h3 id="property">3. Intellectual Property</h3>
        <p>
          All content included on our website, such as text, graphics, logos,
          images, audio clips, video clips, digital downloads, data
          compilations, and software, is the property of Origin Jumpworks or its
          content suppliers and protected by international copyright laws.
        </p>
        <h3 id="limits">4. Limitations</h3>
        <p>
          In no event shall Origin Jumpworks or its suppliers be liable for any
          damages arising out of the use or inability to use our website, even
          if we have been notified orally or in writing of the possibility of
          such damage.
        </p>
        <h3 id="governing-law">5. Governing Law</h3>
        <p>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of [Your Country], without regard to its conflict of law
          provisions.
        </p>
        <h3 id="changes">6. Changes to Terms</h3>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms of Use at any time. It is your responsibility to check
          these terms periodically for changes. Your continued use of our
          website following the posting of any changes to these terms
          constitutes acceptance of those changes.
        </p>
        <h3 id="contact-us">7. Contact Us</h3>
        <p>
          If you have any questions about these Terms of Use, please contact us
          at
          <a href="mailto:hello@origin-jumpworks.space"
            >hello@origin-jumpworks.space</a
          >
        </p>
      </section>
      <section id="privacy"></section>
      <section id="cookie"></section>
    </v-container>
  </main>
</template>

<style scoped>
main {
  padding-top: 100px;
  width: 100vw;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
p {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
a {
  transition: color 0s;
  &::after {
    content: "";
  }
}
a:hover {
  text-decoration: underline;
  color: var(--ori-color-accent);
  &::after {
    content: "";
  }
}
hr {
  border: solid 0.5px var(--ori-color-black);
  border-radius: 1px;
}
section {
  margin: 3rem auto;
}
section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
section h3 {
  font-size: 1.5rem;
  font-weight: 500;
}
section p {
  font-size: 1.25rem;
  line-height: 1.5;
}
section ol {
  list-style: upper-alpha;
  list-style-position: inside;
  padding: 0;
}
section ol.sub-level {
  margin-left: 1.5rem;
  list-style: number;
  list-style-position: inside;
}
section li {
  margin-bottom: 0.5rem;
}
section li a {
  color: var(--primary);
}
section li a:hover {
  text-decoration: underline;
}
.disclaimer {
  margin-top: 3rem;
}
.disclaimer p {
  font-size: 0.75rem;
  line-height: 1.5;
}
.disclaimer p:last-child {
  margin-bottom: 0;
}
.disclaimer a {
  color: var(--primary);
}
.disclaimer a:hover {
  text-decoration: underline;
}
</style>
