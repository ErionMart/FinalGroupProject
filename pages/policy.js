// pages/policy.js

import React from 'react';
import styles from '../styles/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicyPage}>
      <h1>Privacy Policy for TrailStride Footwear</h1>

      {/* Introduction Section */}
      <section data-testid="privacy-introduction">
        <h2>Introduction</h2>
        <p>Welcome to TrailStride Footwear's privacy policy. Your privacy is paramount to us. This document details the personal information we collect, our usage practices, and the steps we take to safeguard your data.</p>
      </section>

      {/* Information Collection Section */}
      <section data-testid="privacy-info-collection">
        <h2>What Information We Collect</h2>
        <ul>
          <li><strong>Personal Identification Information</strong>: We may gather your name, email address, phone number, and shipping address when you register on our site, place an order, subscribe to our newsletter, or participate in our promotions.</li>
          <li><strong>Non-personal Identification Information</strong>: As you navigate our site, we may collect non-personal data such as your browser type, device specifications, and other technical details related to your interaction with our website, like the operating system and your internet service providers.</li>
        </ul>
      </section>

      {/* Information Usage Section */}
      <section data-testid="privacy-info-usage">
        <h2>How We Use Collected Data</h2>
        <p>TrailStride Footwear may use the information we collect from you in the following ways:</p>
        <ul>
          <li><strong>To Process Transactions</strong>: Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested by the customer.</li>
          <li><strong>To Communicate</strong>: The email address you provide for order processing may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>
        </ul>
      </section>

      {/* Information Protection Section */}
      <section data-testid="privacy-info-protection">
        <h2>How We Protect Your Information</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. These measures include data encryption and secure servers to safeguard against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.</p>
      </section>

      {/* Information Sharing Section */}
      <section data-testid="privacy-info-sharing">
        <h2>Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent users' identifiable personal information to others. We may share generic demographic information not linked to any personal identification information with our business partners, trusted affiliates, and advertisers for the objectives outlined above.</p>
      </section>

<section data-testid="privacy-google-analytics">
  <h2>Use of Google Analytics</h2>
  <p>
  Our website utilizes Google Analytics to help analyze how visitors use the site. Google Analytics employs "cookies" to collect standard internet log information and visitor behavior information in an anonymous form. We use the data collected to compile reports and to help us improve our site.
  </p>
  <p>
    For more information on how Google uses data when you use our site and how 
    you can opt out, please visit 
    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
      Google's policy page.
    </a>
  </p>
</section>


<section data-testid="privacy-gdpr-compliance">
  <h2>GDPR Compliance</h2>
  <p>
    To adhere to the General Data Protection Regulation, we assure the following rights:
  </p>
  <ul>
    <li>
    Rights to Data: You can request access, correction, deletion, or porting of your personal data, as well as withdraw consent by contacting us.
    </li>
    <li>
    Data Security: All personal data is processed and stored with robust security measures in place to prevent unauthorized access, disclosure, or loss.
    </li>
  </ul>
</section>

      {/* Policy Changes Section */}
      <section data-testid="privacy-policy-changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>TrailStride Footwear reserves the right to update this privacy policy at any time. When updated, the revision date at the bottom of this page will reflect the changes. We encourage you to review this policy periodically to stay informed on how we protect your information.</p>
      </section>

      {/* Acceptance of Terms Section */}
      <section data-testid="privacy-acceptance">
        <h2>Your Acceptance of These Terms</h2>
        <p>By using our site, you indicate your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued engagement with our site following any changes to this policy will be deemed your acceptance of those changes.</p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;