import { FaLinkedin, FaRegFileAlt,FaHubspot , FaFacebook, FaRegCompass  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { LiaGhostSolid } from "react-icons/lia";

const cardData = {
  A: {
    title: "Phantoms",
    description:
      "Automate individual tasks to achieve specific lead generation goals.",
    cards: [
      {
        icon: [FaLinkedin],
        title: "LinkedIn Profile Scraper",
        description:
          "Scrape all the available data from LinkedIn profiles, including emails!",
        slots: 1,
        tag: "Phantom",
      },
      {
        icon: [FaLinkedin],
        title: "LinkedIn Auto Connect",
        description:
          "Auto connect with a list of LinkedIn users by sending invitations with a personalized message",
        slots: 1,
        tag: "Phantom",
      },
      {
        icon: [FaLinkedin],
        title: "LinkedIn Connections Export",
        description:
          "Export your LinkedIn connections' profiles as the first step for any workflow",
        slots: 1,
        tag: "Phantom",
      },
      {
        icon: [FaRegCompass],
        title: "Sales Navigator Search Export",
        description:
          "Scrape and export the results of a Sales Navigator search into a spreadsheet",
        slots: 1,
        tag: "Phantom",
      },
      {
        icon: [MdEmail],
        title: "Professional Email Finder",
        description:
          "Find a professional email address for anyone from their full name and current company name",
        slots: 1,
        tag: "Phantom",
      },
      {
        icon: [FaFacebook],
        title: "Facebook Group Members Export",
        description: "Extract the members of a Facebook group",
        slots: 1,
        tag: "Phantom",
      },
      // Add more cards for Tab A as needed
    ],
  },

  B: {
    title: "Flows",
    description: "Create automated workflows for your lead generation.",
    cards: [
      {
        icon: [FaLinkedin, MdEmail, FaRegCompass],
        title: "LinkedIn Search to Profile Data",
        description:
          "Extract LinkedIn users from a search and scrape all the available data on their profile and company pages, including emails!",
        slots: 2,
        tag: "Flow",
      },
      {
        icon: [FaLinkedin, FaRegCompass],
        title: "LinkedIn Search to Lead Connection",
        description:
          "Extract LinkedIn users from a search or group, auto-connect with them, and keep track of who accepts your request",
        slots: 2,
        tag: "Flow",
      },
      {
        icon: [FaLinkedin, MdEmail],
        title: "LinkedIn Group Members to Emails",
        description:
          "Find the professional email addresses of members of a LinkedIn group",
        slots: 2,
        tag: "Flow",
      },
      {
        icon: [FaLinkedin],
        title: "LinkedIn New Connection Welcome Messages",
        description:
          "Send a personalized message to your new LinkedIn connections automatically after connecting",
        slots: 2,
        tag: "Flow",
      },
      {
        icon: [MdEmail, FaRegCompass ],
        title: "Sales Navigator Search to Emails",
        description:
          "Find the professional email addresses of LinkedIn profiles directly from a Sales Navigator search",
        slots: 2,
        tag: "Flow",
      },
      {
        icon: [MdEmail, FcGoogle ],
        title: "Google Maps Search to Contact Data",
        description:
          "Extract emails, phone numbers, and social media info from Google Maps search results",
        slots: 2,
        tag: "Flow",
      },
    ],
  },
  C: {
    title: "Integrations",
    description:
      "Integrate with various platforms to enhance your lead generation.",
    cards: [
      {
        icon: [LiaGhostSolid],
        title: "CSalesforce CRM Enricher",
        description:
          "Migrate data to your Salesforce CRM in seconds",
        slots: 1,
        tag: "Phantom",
      },
      {
        icon: [FaHubspot],
        title: "HubSpot CRM Enricher",
        description:
          "Migrate data to your HubSpot CRM in seconds",
        slots: 1,
        tag: "Flow",
      },
      {
        icon: [FaHubspot],
        title: "Pipedrive CRM Enricher",
        description:
          "Migrate data to your Pipedrive CRM in seconds",
        slots: 1,
        tag: "Flow",
      },
      {
        icon: [FaLinkedin, FaRegCompass],
        title: "LinkedIn Search to lemlist Campaign",
        description:
          "Migrate professional email addresses to your lemlist email campaign directly from a LinkedIn search",
        slots: 1,
        tag: "Flow",
      },
      {
        icon: [FaLinkedin],
        title: "LinkedIn Profiles to lemlist Campaign",
        description:
          "Migrate LinkedIn profile data to your lemlist email campaign in seconds",
        slots: 1,
        tag: "Phantom",
      }
    ],
  },
};

export default cardData;
