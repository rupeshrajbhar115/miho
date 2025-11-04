/* eslint-disable @next/next/no-img-element */
// MODULES //
import { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/sections/IndianMade.module.scss";

// IMAGES //
import LeftWave from "../../public/img/home/left_wave.png";
import RightWave from "../../public/img/home/right_wave.png";
import LeftLine from "../../public/img/home/left_line.png";
import CenterLine from "../../public/img/home/center_line.png";
import RightLine from "../../public/img/home/right_line.png";
import Leaf from "../../public/img/home/leaf.png";
import Mood from "../../public/img/home/moon.png";
import Flovare1 from "../../public/img/home/flovare1.png";
import Flovare2 from "../../public/img/home/flovare2.png";
import Flovare3 from "../../public/img/home/flovare3.png";
import Flovare4 from "../../public/img/home/flovare4.png";

// DATA //

/** IndianMade Section */
export default function IndianMade() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const winH = window.innerHeight;
		const animationTimeline = gsap.timeline();

		animationTimeline
			.to(
				`.${styles.Flovare1}`,
				{
					scale: "1",
				},
				"1st"
			)
			.to(
				`.${styles.Flovare2}`,
				{
					scale: "1",
				},
				"1st"
			)
			.to(
				`.${styles.Flovare3}`,
				{
					scale: "1",
				},
				"1st"
			)
			.to(
				`.${styles.Mood}`,
				{
					scale: "1",
				},
				"1st"
			)
			.to(
				`.${styles.Flovare4}`,
				{
					scale: "1",
				},
				"1st"
			)
			.to(
				`.${styles.Leaf}`,
				{
					right: "0",
				},
				"1st"
			)
			.to(
				`.${styles.LeftLine}`,
				{
					left: "0",
				},
				"1st"
			)
			.to(
				`.${styles.RightLine}`,
				{
					right: "0",
				},
				"1st"
			)
			.to(
				`.${styles.bottom_img}`,
				{
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.one} h2`,
				{
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.two} h2`,
				{
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.three} h2`,
				{
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.para_data} p`,
				{
					transform: "translateY(0%)",
				},
				"1st"
			);

		// Attach ScrollTrigger
		ScrollTrigger.create({
			trigger: `.${styles.IndianMade}`,
			start: "35% bottom",
			end: "+=" + winH,
			animation: animationTimeline,
			scrub: true,
			// markers: true,
		});
	}, []);
	return (
		<section className={styles.IndianMade}>
			<img
				src={LeftLine.src}
				alt="image"
				className={`${styles.LeftLine} img-responsive`}
			/>
			<img
				src={CenterLine.src}
				alt="image"
				className={`${styles.CenterLine} img-responsive`}
			/>
			<img
				src={RightLine.src}
				alt="image"
				className={`${styles.RightLine} img-responsive`}
			/>
			<img
				src={Leaf.src}
				alt="image"
				className={`${styles.Leaf} img-responsive`}
			/>
			<img
				src={Mood.src}
				alt="image"
				className={`${styles.Mood} img-responsive`}
			/>
			<img
				src={Flovare1.src}
				alt="image"
				className={`${styles.Flovare1} img-responsive`}
			/>
			<img
				src={Flovare2.src}
				alt="image"
				className={`${styles.Flovare2} img-responsive`}
			/>
			<img
				src={Flovare3.src}
				alt="image"
				className={`${styles.Flovare3} img-responsive`}
			/>
			<img
				src={Flovare4.src}
				alt="image"
				className={`${styles.Flovare4} img-responsive`}
			/>
			<div className={styles.text_section}>
				<div className={styles.title_animation}>
					<div className={styles.one}>
						<h2 className="section_big_title">
							<span>Indian-Made. </span>
						</h2>
					</div>
					<div className={styles.two}>
						<h2 className="section_big_title">
							<span>K-Wave Inspired.</span>
						</h2>
					</div>
					<div className={styles.three}>
						<h2 className="section_big_title">
							<span>You-Approved.</span>
						</h2>
					</div>
					<div className={styles.para_data}>
						<p>
							MIHO blends the heart of India with the soul of Korean culture. Born out
							of a love for culture, friendship, and feel-good fun, it’s drink that
							flips the script. Smooth and full of flavour, MIHO is designed for those
							who crave style without excess. We’re not chasing wild nights; we’re
							embracing mellow vibes. Stylish, inclusive, and totally unpretentious —
							MIHO Soju is for those who believe life’s best moments are the ones you
							can remember.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.bottom_img}>
				<div className={styles.left_img}>
					<img src={LeftWave.src} alt="image" className="img-responsive" />
				</div>
				<div className={styles.right_img}>
					<img src={RightWave.src} alt="image" className="img-responsive" />
				</div>
			</div>
		</section>
	);
}
