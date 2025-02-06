import React, { useState, useRef } from "react";
import {MdLanguage} from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import {
  AiOutlineMenu,
  AiOutlineSend,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { BsFillPersonVcardFill, BsArrowUpRightCircle } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";


const Header = ({ changeLanguage }) => {

  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [resourcesDropdownVisible, setResourcesDropdownVisible] =
    useState(false);
  const [solutionsDropdownVisible, setSolutionsDropdownVisible] =
    useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dropdownRef = useRef(null);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (

    
    <header className="container w-full">
      <div className="flex flex-wrap justify-between md:justify-center lg:justify-between items-center py-4">
        <div className="logo flex items-center">
          <img src={Logo} alt="Logo" className="w-10" />
          <Link to="/">
            <span className="text-xl font-bold">{t('Phantom')}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-4 md:flex-wrap md:items-center justify-center">
          <ul className="flex space-x-5 relative">
            {!isLoggedIn ? (
              <>
                <li
                  className="relative"
                  onMouseEnter={() => setDropdownVisible(true)}
                  onMouseLeave={() => setDropdownVisible(false)}
                >
                  <button className="focus:outline-none flex items-center">
                    Why Phantom?
                    <AiOutlineDown
                      className={`ml-1 text-sm transition-transform duration-300 ${
                        dropdownVisible ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Mega Dropdown */}
                  {dropdownVisible && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 top-4 mt-2 w-72 p-4 bg-white shadow-lg border rounded-lg z-50"
                    >
                      <div className="flex flex-col">
                        <div className="mb-4">
                          <ul>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded">
                              <a
                                href="#"
                                className="font-bold text-sm flex items-center gap-2"
                              >
                                <AiOutlineUsergroupDelete className="text-2xl" />{" "}
                                Extract List of Leads
                              </a>
                              <p className="text-sm text-gray-500 mt-1">
                                Source qualified leads from any corner of the
                                web.
                              </p>
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded">
                              <a
                                href="#features"
                                className="font-bold text-sm flex items-center gap-2"
                              >
                                <BsFillPersonVcardFill className="text-2xl" />{" "}
                                Enrich with data & emails
                              </a>
                              <p className="text-sm text-gray-500 mt-1">
                                Fill the gaps in your database with contact
                                enrichment.
                              </p>
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded">
                              <a
                                href="#automation"
                                className="font-bold text-sm flex items-center gap-2"
                              >
                                <AiOutlineSend className="text-2xl" /> Send
                                outreach campaigns
                              </a>
                              <p className="text-sm text-gray-500 mt-1">
                                Automate your outreach campaigns at scale.
                              </p>
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded">
                              <a
                                href="#automation"
                                className="font-bold text-sm flex items-center gap-2"
                              >
                                <FaBalanceScale className="text-2xl" /> Automate
                                responsibly
                              </a>
                              <p className="text-sm text-gray-500 mt-1">
                                Our view on ethical usage.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard">{t('Dashboard')}</Link>
                </li>
                <li>
                    <Link to="/leads">{t('Linkedin Leads')}</Link>
                </li>
              </>
            )}

            <li
              className="relative"
              onMouseEnter={() => setSolutionsDropdownVisible(true)}
              onMouseLeave={() => setSolutionsDropdownVisible(false)}
            >
              <button className="focus:outline-none flex items-center ">
                {t('Solutions')}
                <AiOutlineDown
                  className={`ml-1 text-sm transition-transform duration-300 ${
                    solutionsDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Mega Dropdown */}
              {solutionsDropdownVisible && (
                <div className="absolute left-5 md:left-0  top-full w-96 p-4 bg-white shadow-lg border rounded-lg z-50">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <ul className="">
                        <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center gap-2">
                          <img
                            src="images/comments.png"
                            alt="Extract Leads"
                            className="w-28 h-16"
                          />
                          <a href="#how-it-works" className="text-sm ">
                            <span className="font-bold">
                              Scrape Lead from Linkedin Company Posts
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              Find new lead by scraping commenters and likers
                            </p>
                          </a>
                        </li>
                        <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center gap-2">
                          <img
                            src="images/companypage.png"
                            alt="Extract Leads"
                            className="w-28 h-16"
                          />

                          <a href="#features" className=" text-sm ">
                            <span className="font-bold">
                              Scrape Lead from Linkedin Profile Posts
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              Find new lead by scraping commenters and likers
                            </p>
                          </a>
                        </li>
                        <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center gap-2">
                          <img
                            src="images/reach.png"
                            alt="Extract Leads"
                            className="w-28 h-16"
                          />

                          <a href="#automation" className=" text-sm ">
                            <span className="font-bold">
                              Connect and Send Follow up messages
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              Build new relationships and grow your network
                            </p>
                          </a>
                        </li>
                        <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center gap-2">
                          <img
                            src="images/search.png"
                            alt="Extract Leads"
                            className="w-28 h-16"
                          />
                          <a href="#automation" className=" text-sm">
                            <span className="font-bold">
                              Connect your profiles from a Linkedin Search
                            </span>
                            <p className="text-sm text-gray-500 mt-1">
                              Turn search results into new Connections
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <a href="#contact" className="text-sm  text-blue-600">
                      <span className="font-bold">
                        Learn more about all solutions
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </li>

            {!isLoggedIn ? (
              <>
                <li
                  className="relative"
                  onMouseEnter={() => setResourcesDropdownVisible(true)}
                  onMouseLeave={() => setResourcesDropdownVisible(false)}
                >
                  <button className="focus:outline-none flex items-center ">
                    Resources
                    <AiOutlineDown
                      className={`ml-1 text-sm transition-transform duration-300 ${
                        resourcesDropdownVisible ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Mega Dropdown */}
                  {resourcesDropdownVisible && (
                    <div className="absolute left-5 md:left-0 top-full w-52 p-4 bg-white shadow-lg border rounded-lg z-50">
                      <div className="flex flex-col">
                        <div className="mb-4">
                          <ul className="">
                            <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center justify-between">
                              <a
                                href="#how-it-works"
                                className="font-bold text-sm "
                              >
                                Help Center
                              </a>
                              <BsArrowUpRightCircle />
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center justify-between">
                              <a
                                href="#features"
                                className="font-bold text-sm "
                              >
                                Blog
                              </a>
                              <BsArrowUpRightCircle />
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center justify-between">
                              <a
                                href="#automation"
                                className="font-bold text-sm "
                              >
                                Use Cases
                              </a>
                              <BsArrowUpRightCircle />
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center justify-between">
                              <a
                                href="#automation"
                                className="font-bold text-sm "
                              >
                                Integrations
                              </a>
                              <BsArrowUpRightCircle />
                            </li>
                            <li className="py-3 hover:bg-gray-100 px-2 rounded flex items-center justify-between">
                              <a
                                href="#automation"
                                className="font-bold text-sm "
                              >
                                Coaching
                              </a>
                              <BsArrowUpRightCircle />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link>Pricing</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link> {t('Resources')} </Link>
                </li>
                <li>
                  <Link>{t('Whats New')} </Link>
                </li>

                <li>
                  <button className="text-primary border-2 border-primary rounded-full px-2 hover:bg-primary hover:text-white transition duration-300">
                    <Link>{t('Upgrade')}</Link>
                  </button>
                </li>
              </>
            )}


              {/* Language Selector */}
              <li
              className="relative"
              onMouseEnter={() => setLanguageDropdownVisible(true)}
              onMouseLeave={() => setLanguageDropdownVisible(false)}
            >
              <button className="flex items-center">
                <MdLanguage className="text-2xl"/>
                <AiOutlineDown
                  className={`ml-1 text-sm transition-transform duration-300 ${
                    languageDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Language Dropdown */}
              {languageDropdownVisible && (
                <div className="absolute right-0 top-full w-32 p-2 bg-white shadow-lg border rounded-lg z-50">
                  <ul>
                    <li className="py-2 hover:bg-gray-100 px-2">
                      <button onClick={() => changeLanguage('en')} className="w-full text-left">
                        English
                      </button>
                    </li>
                    <li className="py-2 hover:bg-gray-100 px-2">
                      <button onClick={() => changeLanguage('fr')} className="w-full text-left">
                        French
                      </button>
                    </li>
                    {/* Add more languages as needed */}
                  </ul>
                </div>
              )}
            </li>
          </ul>
          {isLoggedIn ? (
            <div
              className="relative profile-container "
              onMouseEnter={() => setProfileDropdownVisible(true)}
              onMouseLeave={() => setProfileDropdownVisible(false)}
            >
              <span className="flex items-center text-primary  px-4 py-2 ">
                <img
                  src={Logo}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {"Umair"}
                <AiOutlineDown
                  className={`ml-1 text-sm transition-transform duration-300 ${
                    profileDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </span>
              {profileDropdownVisible && (
                <div className="absolute right-0 top-full w-48 p-4 bg-white shadow-lg border rounded-lg z-50 profile-dropdown">
                  <ul>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/user-setting">{t('User settings')}</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/workspace-setting">{t('workspace settings')}</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/proxies">{t('Proxies')}</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/billing">{t('Billing')}</Link>
                    </li>

                    <li className="p-2 hover:bg-gray-100 text-red-500">
                      <Link to="/">{t('Logout')}</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="nav-buttons flex space-x-5 ml-5">
              <button className="text-primary border-2 border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-white transition duration-300">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-primary text-white border-1 rounded-md px-4 py-2 hover:bg-opacity-80 transition duration-300">
                Start Free trial
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu toogle Button */}
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={showNav ? "true" : "false"}
        >
          {showNav ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-50 p-5 transition-transform transform ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleNav}
          type="button"
          className="text-gray-500 hover:text-gray-700 absolute top-5 right-5"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <ul className="mt-12 space-y-4">
          {!isLoggedIn ? (
            <>
              <li>
                <button
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                  className="flex items-center space-x-1"
                >
                  <span>Why Phantom?</span>
                  <AiOutlineDown
                    className={`transition-transform duration-300 ${
                      dropdownVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Mobile Dropdown */}
                {dropdownVisible && (
                  <ul className="mt-2 space-y-2 bg-gray-100">
                    <li>
                      <a
                        href="#how-it-works"
                        className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2"
                      >
                        <AiOutlineUsergroupDelete className="text-2xl" />{" "}
                        Extract List of Leads
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2"
                      >
                        <BsFillPersonVcardFill className="text-2xl" /> Enrich
                        with data & emails
                      </a>
                    </li>
                    <li>
                      <a
                        href="#automation"
                        className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2"
                      >
                        <AiOutlineSend className="text-2xl" /> Send outreach
                        campaigns
                      </a>
                    </li>
                    <li>
                      <a
                        href="#automation"
                        className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2"
                      >
                        <FaBalanceScale className="text-2xl" /> Automate
                        responsibly
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/leads">Linkedin Leads</Link>
              </li>
            </>
          )}

          <li>
            <button
              onClick={() =>
                setSolutionsDropdownVisible(!solutionsDropdownVisible)
              }
              className="flex items-center space-x-1"
            >
              <span>Solutions</span>
              <AiOutlineDown
                className={`transition-transform duration-300 ${
                  solutionsDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Dropdown */}
            {solutionsDropdownVisible && (
              <ul className="mt-2 space-y-2 bg-gray-100">
                <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center gap-2">
                  <img
                    src="images/comments.png"
                    alt="Extract Leads"
                    className="w-28 h-16"
                  />
                  <a href="#how-it-works" className="font-bold text-sm ">
                    Scrape Lead from Linkedin Company Posts
                    <p className="text-sm text-gray-500 mt-1">
                      Find new lead by scraping commenters and likers
                    </p>
                  </a>
                </li>
                <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center gap-2">
                  <img
                    src="images/companypage.png"
                    alt="Extract Leads"
                    className="w-28 h-16"
                  />

                  <a href="#features" className="font-bold text-sm ">
                    Scrape Lead from Linkedin Profile Posts
                    <p className="text-sm text-gray-500 mt-1">
                      Find new lead by scraping commenters and likers
                    </p>
                  </a>
                </li>
                <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center gap-2">
                  <img
                    src="images/reach.png"
                    alt="Extract Leads"
                    className="w-28 h-16"
                  />

                  <a href="#automation" className="font-bold text-sm ">
                    Connect and Send Follow up messages
                    <p className="text-sm text-gray-500 mt-1">
                      Build new relationships and grow your network
                    </p>
                  </a>
                </li>
                <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center gap-2">
                  <img
                    src="images/search.png"
                    alt="Extract Leads"
                    className="w-28 h-16"
                  />
                  <a href="#automation" className="font-bold text-sm">
                    Connect your profiles from a Linkedin Search
                    <p className="text-sm text-gray-500 mt-1">
                      Turn search results into new Connections
                    </p>
                  </a>
                </li>
                <div className="flex justify-end">
                  <a
                    href="#contact"
                    className="text-sm font-bold text-blue-600"
                  >
                    Learn more about all solutions
                  </a>
                </div>
              </ul>
            )}
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <button
                  onClick={() =>
                    setResourcesDropdownVisible(!resourcesDropdownVisible)
                  }
                  className="flex items-center space-x-1"
                >
                  <span>Resources</span>
                  <AiOutlineDown
                    className={`transition-transform duration-300 ${
                      resourcesDropdownVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Mega Dropdown */}
                {resourcesDropdownVisible && (
                  <ul className="mt-2 space-y-2 bg-gray-100 p-2">
                    <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center justify-between">
                      <a href="#how-it-works" className="font-bold text-sm ">
                        Help Center
                      </a>
                      <BsArrowUpRightCircle />
                    </li>
                    <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center justify-between">
                      <a href="#features" className="font-bold text-sm ">
                        Blog
                      </a>
                      <BsArrowUpRightCircle />
                    </li>
                    <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center justify-between">
                      <a href="#automation" className="font-bold text-sm ">
                        Use Cases
                      </a>
                      <BsArrowUpRightCircle />
                    </li>
                    <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center justify-between">
                      <a href="#automation" className="font-bold text-sm ">
                        Integrations
                      </a>
                      <BsArrowUpRightCircle />
                    </li>
                    <li className="py-3 hover:bg-gray-200 px-2 rounded flex items-center justify-between">
                      <a href="#automation" className="font-bold text-sm ">
                        Coaching
                      </a>
                      <BsArrowUpRightCircle />
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={toggleNav}>Pricing</Link>
              </li>
              <li>
                <Link onClick={toggleNav}>Watch Videos</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>Resources </Link>
              </li>
              <li>
                <Link>What's New </Link>
              </li>

              <li>
                <button className="text-primary mb-5 border-2 border-primary rounded-full px-2 hover:bg-primary hover:text-white transition duration-300">
                  <Link>Upgrade</Link>
                </button>
              </li>
            </>
          )}



            {/* Language Selector */}
            <li
              className="relative"
              onMouseEnter={() => setLanguageDropdownVisible(true)}
              onMouseLeave={() => setLanguageDropdownVisible(false)}
            >
              <button className="focus:outline-none flex items-center">
                Language
                <AiOutlineDown
                  className={`ml-1 text-sm transition-transform duration-300 ${
                    languageDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Language Dropdown */}
              {languageDropdownVisible && (
                <div className="absolute right-0 top-full w-32 p-2 bg-white shadow-lg border rounded-lg z-50">
                  <ul>
                    <li className="py-2 hover:bg-gray-100 px-2">
                      <button onClick={() => changeLanguage('en')} className="w-full text-left">
                        English
                      </button>
                    </li>
                    <li className="py-2 hover:bg-gray-100 px-2">
                      <button onClick={() => changeLanguage('fr')} className="w-full text-left">
                        French
                      </button>
                    </li>
                    {/* Add more languages as needed */}
                  </ul>
                </div>
              )}
            </li>

        </ul>

        {isLoggedIn ? (
          <div
            className="profile-container hover:cursor-pointer "
            onClick={() => setProfileDropdownVisible(!profileDropdownVisible)}
          >
            <span className="flex items-center border-2 rounded-md text-primary  px-4 py-2 ">
              <img
                src={Logo}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              {"Umair"}
              <AiOutlineDown
                className={`ml-1 text-sm transition-transform duration-300 ${
                  profileDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </span>
            {profileDropdownVisible && (
              <div className="p-4 bg-white shadow-lg border rounded-lg z-50 profile-dropdown">
                <ul>
                  <li className="p-2 hover:bg-gray-100">
                    <Link to="/user-setting">User settings</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link to="/workspace-setting">workspace settings</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link to="/proxies">Proxies</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link to="/billing">Billing</Link>
                  </li>

                  <li className="p-2 hover:bg-gray-100 text-red-500">
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5">
            <button className="text-primary border-2 border-primary rounded-md px-4 py-2 w-full mb-2 hover:bg-primary hover:text-white transition duration-300">
              Login
            </button>
            <button className="bg-primary text-white border-1 rounded-md px-4 py-2 w-full hover:bg-opacity-80 transition duration-300">
              Free trial
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
