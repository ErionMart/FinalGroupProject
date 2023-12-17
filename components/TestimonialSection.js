// components/TestimonialSection.js
import Image from 'next/image';
import styles from '../styles/TestimonialSection.module.css'; // CSS module for styling

const TestimonialSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>About Us</h1> {/* Apply the title class here */}
        <p className={styles.paragraph}>
        TrailStride Footwear is more than a business; it's a gathering of fervent hikers and trail lovers. Established with a commitment to adventure, resilience, and caring for the environment, our goal is to provide outstanding hiking shoes for explorers while also playing a role in discovering and conserving the natural world. Our founding insight was meaningful yet straightforward: each step taken on a trail offers a chance to bond with nature and make a beneficial difference. At TrailStride Footwear, we are convinced that actively helping to maintain the wilderness is the most respectful way to appreciate its splendor.
          {/* The rest of your text */}
        </p>
      </div>
      <div className={styles.imageSection}>
        {/* Make sure the src path is correct. It should be just "/hiker.png" if hiker.png is directly in the public directory */}
        <Image
          src="/hiker.webp"
          alt="Hiker Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
