"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/assets/logo.svg';
import logo_text from '@/assets/logo_text.svg';
import Link from "next/link";
import '@/styles/home.css';
import H1 from "@/components/typography/h1";
import Lead from "@/components/typography/lead";
import { Workflow, CodeXml, TabletSmartphone, Brain, Microchip, Router } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

export default function Home() {

  return (
    <>
      <div id='home_master_nav'>
        <div id='home_child_nav'>
          <Image draggable='false' id='home_nav_logo' alt='logo' src={logo_text} />
          <Button style={{ marginLeft: "auto" }} variant='outline' asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <div id='home_body_master'>
        <div id='home_body_child'>
          <div id='home_hero_master'>
            <div id='home_grid_wrapper'>
              <div id='home_hero_grid'>
              </div>
            </div>
            <Image draggable='false' id='home_hero_logo' src={logo} alt='logo' />
            <div id='home_hero_color'></div>
            <div id='home_hero_info'>
              <h1 id='home_hero_title'>
                One Stop Engineering Solution
              </h1>
              <Lead className='home_hero_desc'>
                We are a team of engineers and designers who are passionate about creating innovative solutions for our clients.
              </Lead>
              <Button className='home_hero_action' asChild>
                <Link href="/contact">Reach Out</Link>
              </Button>
            </div>
          </div>
          <div className='home_hero_sub_master'>
            <div className='home_hero_sub_title'>
              Build with expert minds which deliver tailor-made solutions
            </div>
          </div>
          <div className="home_gap"></div>
          <div id='home_services_master'>
            <div className="home_services_child">
              <Router className="home_services_chil_icon" />
              <div className="home_services_chil_title">
                IoT Solutions
              </div>
              <div className="home_services_chil_desc">
                Design and deploy smart, connected systems that bridge hardware and software for real-time insights and automation.
              </div>
            </div>

            <div className="home_services_child">
              <Microchip className="home_services_chil_icon" />
              <div className="home_services_chil_title">
                PCB Designing
              </div>
              <div className="home_services_chil_desc">
                From concept to schematic to final layout, we craft reliable and efficient PCB designs tailored to your product needs.
              </div>
            </div>

            <div className="home_services_child">
              <CodeXml className="home_services_chil_icon" />
              <div className="home_services_chil_title">
                Web Development
              </div>
              <div className="home_services_chil_desc">
                Build fast, scalable, and modern websites and web apps that align with your business goals and user expectations.
              </div>
            </div>

            <div className="home_services_child">
              <Brain className="home_services_chil_icon" />
              <div className="home_services_chil_title">
                AI/ML Solutions
              </div>
              <div className="home_services_chil_desc">
                Implement intelligent systems with machine learning and AI to automate decisions, predict trends, and enhance performance.
              </div>
            </div>

            <div className="home_services_child">
              <TabletSmartphone className="home_services_chil_icon" />
              <div className="home_services_chil_title">
                App Development
              </div>
              <div className="home_services_chil_desc">
                Develop sleek, responsive mobile apps for iOS and Android that offer seamless user experiences and strong functionality.
              </div>
            </div>

            <div className="home_services_child">
              <Workflow className="home_services_chil_icon" />
              <div className="home_services_chil_title">
                DevOps Solutions
              </div>
              <div className="home_services_chil_desc">
                Streamline your development pipeline with CI/CD, containerization, and cloud automation to deliver faster and more reliably.
              </div>
            </div>
          </div>
          <div className='home_hero_sub_maste2'>
            <div style={{ width: "100%", maxWidth: "none" }} className='home_hero_sub_title'>
              Scale your business without compromising on quality
            </div>
          </div>
          <div className="home_gap"></div>
          <div id='home_close_master'>
            <div id='home_close_child_big'>
              <span className="home_close_text">
                Ready to build?
                <span style={{ fontWeight: "500", color: "#666666", marginLeft: "6px" }}>
                  Get started with a free consultation. Talk to our team for <span style={{ color: "#005ff2" }}>Startup</span> and <span style={{ color: "#7d00cc" }}>Enterprise</span> level services.
                </span>
              </span>
              <Button className='home_close_action' asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>

            <div id='home_close_child_small'>
              <span>
                Get to know about our <b>Enterprise services</b> with a live consultation to discuss project goals.
              </span>
              <Button className='home_close_action' variant='outline' asChild>
                <Link href="/contact">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
        <div id='home_footer_master'>
          <div id='home_footer_child'>
            <a target="_blank" href='https://www.linkedin.com/company/linter-labs' id='home_footer_linkedin_mater'>
              <FaLinkedin id='home_footer_linkedin_logo' />
              LinkedIn
            </a>
            <Image id='home_footer_linter_logo' src={logo} alt='logo' />
          </div>
        </div>
      </div>
    </>
  );
}
