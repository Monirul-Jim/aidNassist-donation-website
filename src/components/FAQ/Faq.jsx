"use client";
import Image from "next/image";
import faqImage from "../../../public/Banner.jpeg";
import "react-accessible-accordion/dist/fancy-example.css";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

import "./Faq.css";

const Faq = () => {
	return (
		<div className="py-16 mt-10 md:flex gap-10 bg-white max-w-7xl mx-auto">
			<div className="w-[45%]">
				<Image
					width="300"
					height="200"
					className="w-full faqImage"
					src={faqImage}
					alt="faq image"
				/>
			</div>
			<div className="w-[55%] pr-0 md:pr-16 mt-5 md:mt-0">
				<Accordion>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								How does Aid & Assist work?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Aid & Assist is an online donation platform
								where you can browse through various causes,
								choose the one that resonates with you, and make
								secure donations. We ensure your contributions
								reach the intended beneficiaries through our
								trusted network of partners.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								Is my personal information secure on Aid &
								Assist?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Yes, we take your privacy and security
								seriously. Aid & Assist employs robust data
								protection measures to safeguard your personal
								information and financial data. Our platform
								uses encryption and follows industry standards
								for security.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								Can I make recurring donations?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Yes, we offer the option to set up recurring
								donations. This allows you to provide ongoing
								support to your chosen cause effortlessly.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								What is Aid & Assist&apos;s long-term vision?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								Our long-term vision is to create a global
								community of compassionate individuals who drive
								positive change through online donations. We aim
								to expand our reach, impact, and partnerships to
								address a wide range of pressing global issues.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								How can I be sure my donation is making an
								impact?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								We are committed to transparency. Aid & Assist
								regularly updates donors on the progress of
								projects and the impact of their contributions.
								You can track the results and see how your
								generosity is making a difference.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								How can I get involved beyond making a donation?
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								There are many ways to get involved. You can
								volunteer with our partner organizations, spread
								the word about Aid & Assist, or even start your
								own fundraising campaign. Contact us to explore
								opportunities for deeper engagement.
							</p>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default Faq;
