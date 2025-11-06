// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //
import * as Scroll from "react-scroll";
import {
	Link as ScrollSection,
	// Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Logo from "@/../public/img/logo.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className="container">
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<img src={Logo.src} alt="Logo" className="img-responsive" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<div className={styles.links}>
							<ScrollSection
								onClick={toggleSidebar}
								activeClass={styles.active}
								to="home"
								spy={true}
								smooth={true}
								offset={-10}
								duration={500}
								className={`${styles.link_title}`}
							>
								<div className={styles.link_title}>Home</div>
							</ScrollSection>
							{/* <Link href="">
								<div className={`${styles.link_title} ${styles.active}`}>Home</div>
							</Link> */}
						</div>
						<div className={styles.links}>
							<ScrollSection
								onClick={toggleSidebar}
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-10}
								duration={500}
								className={`${styles.link_title}`}
							>
								<div className={styles.link_title}>About Miho</div>
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								onClick={toggleSidebar}
								activeClass="active"
								to="taste"
								spy={true}
								smooth={true}
								offset={20}
								duration={500}
								className={`${styles.link_title}`}
							>
								<div className={styles.link_title}>Taste</div>
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								onClick={toggleSidebar}
								activeClass="active"
								to="mihopedia"
								spy={true}
								smooth={true}
								offset={20}
								duration={500}
								className={`${styles.link_title}`}
							>
								<div className={styles.link_title}>Mihopedia</div>
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								onClick={toggleSidebar}
								activeClass="active"
								to="events"
								spy={true}
								smooth={true}
								offset={-200}
								duration={500}
								className={`${styles.link_title}`}
							>
								<div className={styles.link_title}>Events</div>
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								onClick={toggleSidebar}
								activeClass="active"
								to="store"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className={`${styles.link_title}`}
							>
								<div className={styles.link_title}>Store Locator</div>
							</ScrollSection>
						</div>
					</div>

					{/* <div className={`${styles.button_section}`}>
						<a href="#" className="submitButton">
							Order Online
						</a>
					</div> */}

					{/* Hamburger icon visible in mobile only */}
					<div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
