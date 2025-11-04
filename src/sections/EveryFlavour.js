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
import styles from "@/styles/sections/EveryFlavour.module.scss";

// IMAGES //
import Mood from "../../public/img/home/mood.svg";
import FlavourBot1 from "../../public/img/home/flavour_bot_1.svg";
import RedWaveTop from "../../public/img/home/red_wave_top.svg";
import GreenWaveBottom from "../../public/img/home/green_wave_top.svg";
import RedCircle from "../../public/img/home/red_circle.png";
import GreenCircle from "../../public/img/home/green_circle.png";
import RedVector1 from "../../public/img/home/RedVector1.png";
import RedVector2 from "../../public/img/home/RedVector2.png";
import RedVector3 from "../../public/img/home/RedVector3.png";
import RedVector4 from "../../public/img/home/RedVector4.png";
import RedVector5 from "../../public/img/home/RedVector5.png";
import RedVector6 from "../../public/img/home/RedVector6.png";
import GreenVector1 from "../../public/img/home/GreenVector1.png";
import GreenVector2 from "../../public/img/home/GreenVector2.png";
import GreenVector3 from "../../public/img/home/GreenVector3.png";
import GreenVector4 from "../../public/img/home/GreenVector4.png";
import GreenVector5 from "../../public/img/home/GreenVector5.png";
import GreenVector6 from "../../public/img/home/GreenVector6.png";
import RedBottle from "../../public/img/home/red_bottle.png";
import GreenBottle from "../../public/img/home/green_bottle.png";
// DATA //

/** EveryFlavour Section */
export default function EveryFlavour() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const winH = window.innerHeight;
		const animationTimeline = gsap.timeline();

		animationTimeline
			.to(
				`.${styles.RedVector1}`,
				{
					top: "30%",
					duration: 1,
				},
				"1st"
			)
			.to(
				`.${styles.RedVector2}`,
				{
					top: "20%",
					duration: 1,
				},
				"1st"
			)
			.to(
				`.${styles.RedVector3}`,
				{
					bottom: "10%",
					duration: 0.6,
				},
				"1st"
			)
			.to(
				`.${styles.RedVector4}`,
				{
					bottom: "20%",
					duration: 1,
				},
				"1st"
			)
			.to(
				`.${styles.RedVector5}`,
				{
					top: "15%",
					duration: 1,
				},
				"1st"
			)
			.to(
				`.${styles.RedVector6}`,
				{
					bottom: "0%",
					duration: 1,
				},
				"1st"
			)
			.to(
				`.${styles.span1}`,
				{
					duration: 1,
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.FlavourBot1}`,
				{
					top: "50%",
					duration: 1,
				},
				"1st"
			)
			.to(
				`.${styles.flavour_section_2}`,
				{
					duration: 1,
					transform: "translateY(-100%)",
				},
				"2nd"
			)
			.to(
				`.${styles.span1}`,
				{
					duration: 1,
					transform: "translateX(-100%)",
				},
				"2nd"
			)
			.to(
				`.${styles.span2}`,
				{
					duration: 1,
					transform: "translateX(-100%)",
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector1}`,
				{
					top: "30%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector2}`,
				{
					top: "20%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector3}`,
				{
					bottom: "10%",
					duration: 0.6,
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector4}`,
				{
					bottom: "20%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector5}`,
				{
					top: "15%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector6}`,
				{
					bottom: "0%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.RedVector1}`,
				{
					top: "120%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.RedVector2}`,
				{
					top: "120%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.RedVector3}`,
				{
					bottom: "-120%",
					duration: 0.6,
				},
				"2nd"
			)
			.to(
				`.${styles.RedVector4}`,
				{
					bottom: "-120%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.RedVector5}`,
				{
					top: "120%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.RedVector6}`,
				{
					bottom: "-120%",
					duration: 1,
				},
				"2nd"
			)
			.to(
				`.${styles.RedBottleAnima}`,
				{
					duration: 2,
					clipPath: "polygon(0% 0%, 0% 0%, 20% 98%, 20% 99%)",
				},
				"2nd"
			);

		// Attach ScrollTrigger
		ScrollTrigger.create({
			trigger: `.${styles.flavour_wrapper}`,
			start: "top top",
			end: "+=" + winH,
			animation: animationTimeline,
			scrub: true,
			pin: true,
			// markers: true,
		});
	}, []);
	return (
		<section className={styles.EveryFlavour}>
			<div className={`${styles.top_text_section}`}>
				<div className="container">
					<div className={`${styles.text_section}`}>
						<div
							className={`section_big_title ${styles.text_animation} toTop`}
							data-scroll
						>
							<span className={styles.left_img}>Every Flavour,</span>
							<div className={styles.text_animation_inner}>
								<img src={Mood.src} alt="image" className="img-responsive" />
							</div>
							<span className={styles.right_img}>a Mood.</span>
						</div>
						<h6 className="toTop" data-scroll>
							Soft on the senses. Big on personality.
						</h6>
					</div>
				</div>
				<img
					src={RedWaveTop.src}
					alt="image"
					className={`${styles.RedWaveTop} img-responsive`}
				/>
			</div>

			<div className={`${styles.flavour_wrapper}`}>
				<div className={`${styles.flavour_section_1}`}>
					<div className={`${styles.text_animation}`}>
						<div className={`${styles.text_left}`}>
							<span className={`${styles.span1}`}>Berry</span>
							<span className={`${styles.span2}`}>sun</span>
						</div>
						<div className={`${styles.text_left}`}>
							<span className={`${styles.span1}`}>Bliss</span>
							<span className={`${styles.span2}`}>Daze</span>
						</div>
					</div>

					<div className={`${styles.bottle_section}`}>
						<img
							src={GreenBottle.src}
							alt="image"
							className={`${styles.FlavourBot1} ${styles.GreenBottleAnima} img-responsive`}
						/>
						<img
							src={RedBottle.src}
							alt="image"
							className={`${styles.FlavourBot1} ${styles.RedBottleAnima} img-responsive`}
						/>
					</div>
					<img
						src={RedCircle.src}
						alt="image"
						className={`${styles.RedCircle} img-responsive`}
					/>
					<img
						src={RedVector1.src}
						alt="image"
						className={`${styles.RedVector1} img-responsive`}
					/>
					<img
						src={RedVector2.src}
						alt="image"
						className={`${styles.RedVector2} img-responsive`}
					/>
					<img
						src={RedVector3.src}
						alt="image"
						className={`${styles.RedVector3} img-responsive`}
					/>
					<img
						src={RedVector4.src}
						alt="image"
						className={`${styles.RedVector4} img-responsive`}
					/>
					<img
						src={RedVector5.src}
						alt="image"
						className={`${styles.RedVector5} img-responsive`}
					/>
					<img
						src={RedVector6.src}
						alt="image"
						className={`${styles.RedVector6} img-responsive`}
					/>
					<img
						src={GreenVector1.src}
						alt="image"
						className={`${styles.GreenVector1} img-responsive`}
					/>
					<img
						src={GreenVector2.src}
						alt="image"
						className={`${styles.GreenVector2} img-responsive`}
					/>
					<img
						src={GreenVector3.src}
						alt="image"
						className={`${styles.GreenVector3} img-responsive`}
					/>
					<img
						src={GreenVector4.src}
						alt="image"
						className={`${styles.GreenVector4} img-responsive`}
					/>
					<img
						src={GreenVector5.src}
						alt="image"
						className={`${styles.GreenVector5} img-responsive`}
					/>
					<img
						src={GreenVector6.src}
						alt="image"
						className={`${styles.GreenVector6} img-responsive`}
					/>
				</div>
				<div className={`${styles.flavour_section_2}`}>
					<img
						src={GreenWaveBottom.src}
						alt="image"
						className={`${styles.RedWaveTop} img-responsive`}
					/>
					<img
						src={GreenCircle.src}
						alt="image"
						className={`${styles.GreenCircle} img-responsive`}
					/>
				</div>
			</div>
		</section>
	);
}
