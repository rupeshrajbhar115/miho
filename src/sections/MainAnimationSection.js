/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// MODULES //
import { useEffect, useRef } from "react";
import Script from "next/script";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/sections/MainAnimationSection.module.scss";

// IMAGES //
import BannerWave from "../../public/img/home/banner_wave.svg";
import RedBottle from "../../public/img/home/red_bottle.png";
import GreenBottle from "../../public/img/home/green_bottle.png";
import BannerLeaf from "../../public/img/home/BannerLeaf.png";
import bannerVector1 from "../../public/img/home/bannerVector1.png";
import bannerVector2 from "../../public/img/home/bannerVector2.png";
import bannerVector3 from "../../public/img/home/bannerVector3.png";
import bannerVector4 from "../../public/img/home/bannerVector4.png";
import redBottleAnima from "../../public/img/home/redBottleAnima.svg";
import AnimaVector1 from "../../public/img/home/AnimaVector1.png";
import AnimaVector2 from "../../public/img/home/AnimaVector2.png";
import AnimaVector3 from "../../public/img/home/AnimaVector3.png";
import AnimaVector4 from "../../public/img/home/AnimaVector4.png";
import AnimaVector5 from "../../public/img/home/AnimaVector5.png";
import Hand1 from "../../public/img/home/Hand1.png";
import Hand2 from "../../public/img/home/Hand2.png";
import CircleImg1 from "../../public/img/home/CircleImg1.png";
import CircleImg2 from "../../public/img/home/CircleImg2.png";
import CircleImg3 from "../../public/img/home/CircleImg3.png";
import AnimaCircle from "../../public/img/home/AnimaCircle.svg";
import SmallCircles1 from "../../public/img/home/SmallCircles1.png";
// import SmallCircles2 from "../../public/img/home/SmallCircles2.png";

// DATA //

/** MainAnimationSection Section */
export default function MainAnimationSection() {
	const modelRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const winH = window.innerHeight;
		const animationTimeline = gsap.timeline();
		const animationTimeline1 = gsap.timeline();
		const bannerTimeline = gsap.timeline({});

		bannerTimeline
			.to(
				`.${styles.BannerLeaf}`,
				{
					opacity: "1",
					delay: "0.4",
					duration: "1",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector1}`,
				{
					scale: "1",
					delay: "0.4",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector2}`,
				{
					scale: "1",
					delay: "0.4",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector3}`,
				{
					scale: "1",
					delay: "0.4",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector4}`,
				{
					scale: "1",
					delay: "0.4",
				},
				"1st"
			)
			.to(
				`.${styles.banner_title} h2`,
				{
					duration: 1,
					y: "0",
				},
				"1st"
			)
			.to(
				`.${styles.banner_desc} p`,
				{
					y: "0",
					duration: 1,
				},
				"1st"
			);

		animationTimeline
			.fromTo(
				".left_bottle_anima model-viewer",
				{
					cameraOrbit: "165deg 0 2m",
				},
				{
					rotate: "0",
					cameraOrbit: "545deg 0 2m",
				},
				"1st"
			)
			.fromTo(
				".GreenBottle model-viewer",
				{
					cameraOrbit: "165deg 0 2m",
				},
				{
					cameraOrbit: "550deg 0 2m",
				},
				"1st"
			)
			.to(
				".left_bottle_anima",
				{
					top: "50%",
					left: "50%",
				},
				"1st"
			);

		// Attach ScrollTrigger
		ScrollTrigger.create({
			trigger: ".left_bottle_anima",
			start: "-100px top",
			end: "+=" + winH,
			animation: animationTimeline,
			scrub: true,
			// markers: true,
		});

		animationTimeline1
			.to(
				`.${styles.title_anima}`,
				{
					duration: 1,
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector1}`,
				{
					duration: 1,
					left: "35%",
					opacity: "1",
					bottom: "40%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector2}`,
				{
					duration: 1,
					left: "42%",
					opacity: "1",
					bottom: "5%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector3}`,
				{
					duration: 1,
					left: "55%",
					opacity: "1",
					bottom: "10%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector4}`,
				{
					duration: 1,
					left: "67%",
					opacity: "1",
					bottom: "32%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector5}`,
				{
					duration: 1,
					left: "65%",
					opacity: "1",
					bottom: "43%",
				},
				"1st"
			)
			.to(
				`.${styles.title_anima}`,
				{
					duration: 1,
					opacity: "0",
					transform: "translateY(100%)",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector1}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector2}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector3}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector4}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector5}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaCircle}`,
				{
					opacity: "1",
				},
				"2nd"
			)
			.to(
				".left_bottle_anima",
				{
					duration: 1,
					opacity: "0",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaCircle}`,
				{
					duration: 2,
					transform: "scale(5)",
				},
				"3rd"
			)
			.to(
				`.${styles.LeftHeand}`,
				{
					duration: 1,
					left: "0",
				},
				"3rd"
			)
			.to(
				`.${styles.RightHeand}`,
				{
					duration: 1,
					right: "0",
				},
				"3rd"
			)
			.to(
				`.${styles.LeftHeand}`,
				{
					duration: 1,
					left: "-20%",
				},
				"4th"
			)
			.to(
				`.${styles.RightHeand}`,
				{
					duration: 1,
					right: "-20%",
				},
				"4th"
			)
			.to(
				`.${styles.para}`,
				{
					transform: "translateY(0%)",
				},
				"4th"
			)
			.to(
				`.${styles.img_section}`,
				{
					transform: "translateY(0%)",
				},
				"4th"
			)
			.to(
				`.${styles.img_section}`,
				{
					transform: "translateY(100%)",
				},
				"5th"
			)
			.to(
				`.${styles.para}`,
				{
					transform: "translateY(-100%)",
				},
				"5th"
			)
			.to(
				`.${styles.desc_section}`,
				{
					transform: "translateY(0%)",
				},
				"6th"
			);

		ScrollTrigger.create({
			trigger: `.${styles.bottle_anima_section}`,
			start: "top top",
			end: "+=" + winH * 3,
			animation: animationTimeline1,
			scrub: true,
			pin: true,
			// markers: true,
		});

		// Disable default camera controls on click
		const model = modelRef.current;
		if (model) {
			/** disableInteractions */
			const disableInteractions = (e) => {
				e.preventDefault();
				e.stopPropagation();
			};

			model.addEventListener("click", disableInteractions);
			model.addEventListener("touchstart", disableInteractions);

			return () => {
				ScrollTrigger.getAll().forEach((t) => t.kill());
				animationTimeline.kill();
				model.removeEventListener("click", disableInteractions);
				model.removeEventListener("touchstart", disableInteractions);
			};
		}
	}, []);

	return (
		<section className={styles.MainAnimationSection}>
			<Script
				type="module"
				src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.3.0/dist/model-viewer.min.js"
				strategy="beforeInteractive"
			/>
			<div className={styles.banner_section}>
				<img
					src={bannerVector4.src}
					alt="image"
					className={`${styles.bannerVector4} img-responsive`}
				/>
				<img
					src={BannerWave.src}
					alt="image"
					className={`${styles.bannerWave} img-responsive`}
				/>
				<div className={styles.banner}>
					<div className={styles.left_section}>
						<div className={styles.banner_title}>
							<h2>Flavour Every Emotion</h2>
						</div>
						<div className={styles.banner_desc}>
							<p>
								A spirit inspired by K-culture and crafted for young India — light,
								playful, and made for every MiHO-ment.
							</p>
						</div>
					</div>
					<div className={styles.right_section}>
						<img
							src={BannerLeaf.src}
							alt="image"
							className={`${styles.BannerLeaf} img-responsive`}
						/>
						<img
							src={bannerVector1.src}
							alt="image"
							className={`${styles.bannerVector1} img-responsive`}
						/>
						<img
							src={bannerVector2.src}
							alt="image"
							className={`${styles.bannerVector2} img-responsive`}
						/>
						<img
							src={bannerVector3.src}
							alt="image"
							className={`${styles.bannerVector3} img-responsive`}
						/>
						<div className={styles.bottle}>
							<div className={`${styles.GreenBottle} GreenBottle`}>
								<model-viewer
									ref={modelRef}
									src="/img/3d/SunDaze.glb"
									alt="3D Bottle"
									ar-modes="webxr scene-viewer quick-look"
									camera-controls
									camera-orbit="0deg 85deg 2m"
									shadow-intensity="1"
									disable-zoom
									interaction-prompt="none"
								></model-viewer>
							</div>
							{/* <img
								src={RedBottle.src}
								alt="image"
								className={`${styles.RedBottle} img-responsive`}
							/> */}
							{/* <img
								src={GreenBottle.src}
								alt="image"
								className={`${styles.GreenBottle} img-responsive`}
							/> */}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottle_anima_section}>
				<div className={styles.anima_section}>
					<div className={styles.title_section}>
						<h2 className={`${styles.title_anima} section_big_title`}>
							<span>For the Wild Who Choose Mild.</span>
						</h2>
					</div>
					<div className={`${styles.left_bottle} left_bottle_anima`}>
						<model-viewer
							ref={modelRef}
							src="/img/3d/BerryBliss.glb"
							alt="3D Bottle"
							ar-modes="webxr scene-viewer quick-look"
							camera-controls
							camera-orbit="0deg 85deg 2m"
							shadow-intensity="1"
							disable-zoom
							className="modelViewer"
							interaction-prompt="none"
						></model-viewer>
					</div>
					{/* <img
						src={redBottleAnima.src}
						alt="image"
						className={`${styles.RedBottle} img-responsive`}
					/> */}
					<div className={styles.vector_anima_section}>
						<img
							src={AnimaVector1.src}
							alt="image"
							className={`${styles.AnimaVector1} img-responsive`}
						/>
						<img
							src={AnimaVector2.src}
							alt="image"
							className={`${styles.AnimaVector2} img-responsive`}
						/>
						<img
							src={AnimaVector3.src}
							alt="image"
							className={`${styles.AnimaVector3} img-responsive`}
						/>
						<img
							src={AnimaVector4.src}
							alt="image"
							className={`${styles.AnimaVector4} img-responsive`}
						/>
						<img
							src={AnimaVector5.src}
							alt="image"
							className={`${styles.AnimaVector5} img-responsive`}
						/>
					</div>
				</div>

				{/* circle_anima */}
				<div className={styles.circle_anima}>
					<div className={styles.LeftHeand}>
						<img
							src={Hand1.src}
							alt="image"
							className={`${styles.Hand1} img-responsive`}
						/>
					</div>
					<div className={styles.RightHeand}>
						<img
							src={Hand2.src}
							alt="image"
							className={`${styles.Hand2} img-responsive`}
						/>
					</div>
					<div className={styles.main_circle}>
						<img
							src={AnimaCircle.src}
							alt="image"
							className={`${styles.AnimaCircle} img-responsive`}
						/>
					</div>
				</div>

				{/* heandTextAnima */}
				<div className={styles.heandTextAnima}>
					<div className={styles.text_section}>
						<div className={styles.desc}>
							<div className={styles.para}>
								MiHO is your chill in the chaos — the green bottle that turns every
								hangout into a story. Inspired by the Korean way of drinking, it’s all
								about shared laughs, silly games, late-night chats, and that one friend
								who always says just one more!
							</div>
						</div>
						<div className={styles.desc_section_wrapper}>
							<div className={styles.desc_section}>
								<div className={styles.para2}>
									It’s not about drinking hard; it’s about living light — it’s all about
									shared laughs, fun games, late-night gossip, and that one friend who
									always says just one more!
								</div>
								<h2 className={`${styles.title_anima_circle} section_big_title`}>
									<span>
										Sip it, share it,
										<br /> shoot it
									</span>
								</h2>
								<div className={styles.para2}>every sip is MIHO-licious.</div>
							</div>
						</div>
						<div className={styles.img_section_animation}>
							<div className={styles.img_section}>
								<img
									src={SmallCircles1.src}
									alt="image"
									className={`${styles.SmallCircles1} img-responsive`}
								/>
								<img
									src={SmallCircles1.src}
									alt="image"
									className={`${styles.SmallCircles2} img-responsive`}
								/>
								<div className={styles.one}>
									<img
										src={CircleImg1.src}
										alt="image"
										className={`${styles.CircleImg1} img-responsive`}
									/>
								</div>
								<div className={styles.two}>
									<img
										src={CircleImg2.src}
										alt="image"
										className={`${styles.CircleImg2} img-responsive`}
									/>
								</div>
								<div className={styles.three}>
									<img
										src={CircleImg3.src}
										alt="image"
										className={`${styles.CircleImg3} img-responsive`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="divHeight"></div> */}
		</section>
	);
}
