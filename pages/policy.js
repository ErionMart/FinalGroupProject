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
        <p>Welcome to the privacy policy of TrailStride Footwear, the go-to destination for trail hikers and outdoor enthusiasts. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly and in compliance with applicable data protection laws.</p>
      </section>

      {/* Information Collection Section */}
      <section data-testid="privacy-info-collection">
        <h2>What Information We Collect</h2>
        <ul>
          <li><strong>Personal Identification Information</strong>: We may collect your name, email address, phone number, and shipping address when you make a purchase, sign up for our newsletter, participate in a contest, or engage with us via our contact forms.</li>
          <li><strong>Non-personal Identification Information</strong>:  We may collect non-personal information about your visit to our website, including browser name, the type of device, and technical information about your means of connection, such as the operating system and Internet service providers utilized.</li>
        </ul>
      </section>

      {/* Information Usage Section */}
      <section data-testid="privacy-info-usage">
        <h2>How We Use Collected Data Information</h2>
        <p>TrailStride Footwear may use the information we collect from you in the following ways:</p>
        <ul>
          <li><strong>Process Transactions: </strong>: Your information, whether public or private, will not be sold or exchanged without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
          <li><strong>Improve Customer Service:</strong>: Your information helps us respond more effectively to your customer service requests and support needs.</li>
        </ul>
      </section>

      {/* Information Protection Section */}
      <section data-testid="privacy-info-protection">
        <h2>Protection of Your Information</h2>
        <p>We adopt appropriate data processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.</p>
      </section>

      {/* Information Sharing Section */}
      <section data-testid="privacy-info-sharing">
        <h2>Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners, trusted affiliates, and advertisers.</p>
      </section>

<section data-testid="privacy-google-analytics">
  <h2>Cookies and Tracking Technologies</h2>
  <p>
  Our website uses "cookies" to enhance the user experience. These cookies track information about visitors and are stored on your computer's hard drive. You may choose to set your web browser to refuse cookies or alert you when cookies are being sent. However, doing so may cause some parts of the site to not function properly.  
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
        <p>TrailStride Footwear has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage you to frequently check this page for any changes to stay informed.</p>
      </section>

      {/* Acceptance of Terms Section */}
      <section data-testid="privacy-acceptance">
        <h2>Your Acceptance of These Terms</h2>
        <p>By using our site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes will be deemed your acceptance of those changes.</p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;