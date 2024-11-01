import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./save.css";

const SaveUrPotForm = ({ isOpen, closeOverlay }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay1 z-[88] " id="overlay">
      <div className="flex justify-center items-center  px-[15px] py-[70px] md:px-[200px] my-0 mx-auto  w-full h-auto ">
        <div className="form-container !pt-[40px] !px-[50px]">
          <div className="flex justify-between items-start w-full  ">
            <div className="flex flex-col ">
              <h2 className="text-[18px] text-[#101828] !font-medium">
                PH Women Run's
              </h2>
              <span className="text-[12px] text-[#101828] font-medium">
                Please fill the form below
              </span>
            </div>
            <AiOutlineClose
              onClick={closeOverlay}
              size={30}
              className="  text-[#000000] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <form
              className="w-full"
              action="https://forms.zohopublic.com/finchglowholdings1/form/TravelsTradePar_hVi5JOGxIHVrkseK3XaZk2ei78smdXQ0-mhLQ/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              {/* <!-- To Track referrals , place the referrer name within the " " in the above hidden input field --> */}
              <input type="hidden" name="zf_redirect_url" value="" />
              {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --> */}
              <input type="hidden" name="zc_gad" value="" />
              {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}
              <h2></h2>
              <p></p>
              {/* Name and Last Name*/}
              <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                <div className="w-full">
                  <label>
                    First name <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_First"
                    fieldtype="7"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full">
                  <label>
                    Last name <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_Last"
                    fieldtype="7"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                {/* Email */}
                <div className="w-full">
                  <label>
                    Email <em style={{ color: "red" }}>*</em>
                  </label>

                  <input
                    type="text"
                    maxLength="255"
                    name="Email1"
                    // value="email"
                    fieldtype="9"
                    placeholder="you@company.com"
                  />
                </div>
                {/* Phone */}
                <div className="w-full">
                  <label>
                    Phone <em style={{ color: "red" }}>*</em>
                  </label>

                  <input
                    type="tel"
                    name="Phone"
                    maxLength="20"
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <label className="!flex flex-col !gap-[2px] py-[20px]">
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "goldplay",
                    margin: "0px",
                    fontWeight: "bold",
                    lineHeight: "1em",
                    color: "rgb(51, 51, 51)",
                    fontSize: "16px",
                    clear: "both",
                    display: "block",
                    padding: "0px",
                    border: "0px",
                    textAlign: "left",
                    fontStyle: "normal",
                    fontVariantLigatures: "none",
                    fontVariantCaps: "normal",
                    letterSpacing: "normal",
                    orphans: 2,
                    textIndent: "0px",
                    textTransform: "none",
                    widows: 2,
                    wordSpacing: "0px",
                    whiteSpace: "normal",
                    backgroundColor: "rgb(255, 255, 255)",
                    textDecorationColor: "initial",
                  }}
                  className="forminator-title"
                >
                  Trade Partner Business Details
                </h2>
                <span className="text-[12px] text-[#101828] font-medium">
                  Please fill the form below
                </span>
              </label>
              <div className="flex flex-col justify-center items-center w-full">
                {/* Single Line */}
                <div className="w-full">
                  <label> Agency Name </label>
                  <input
                    type="text"
                    name="SingleLine"
                    // value=""
                    fieldtype="1"
                    maxLength="255"
                    placeholder="Agency name"
                  />
                </div>
                {/* Address */}
                <div className="flex flex-col justify-start items-start w-full">
                  <label>
                    Business Address <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_AddressLine1"
                    placeholder="Business address"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center  w-full">
                {/* Office Email */}
                <div className="w-full">
                  <label> Office Email </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Email1"
                    // value=""
                    fieldtype="9"
                    placeholder="Office email"
                  />
                </div>

                {/* Office Phone */}
                <div className="w-full">
                  <label> Office Phone Number </label>
                  <input
                    type="text"
                    compname="PhoneNumber1"
                    name="PhoneNumber1_countrycode"
                    phoneformat="1"
                    iscountrycodeenabled="false"
                    maxLength="20"
                    fieldtype="11"
                    id="international_PhoneNumber1_countrycode"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center  w-full">
                {/* State/Region/Province */}
                <div className="w-full">
                  <label>State/Region/Province</label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_Region"
                    placeholder="eg: Lagos"
                  />
                </div>
                {/* Street Address */}
                <div className="w-full">
                  <label> Street Address</label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_town"
                    placeholder="Street address"
                  />
                </div>
              </div>
              {/* Website */}
              <div className="w-full">
                <label> Website </label>
                <input
                  type="text"
                  maxLength="2083"
                  name="Website"
                  placeholder=""
                />
              </div>
              {/* Sales Contact */}
              <div className="w-full">
                <label> Sales Contact </label>
                <input
                  type="text"
                  name="Sales_Contact"
                  maxLength="255"
                  placeholder="Name of your Finchglow Travels contact person"
                />
              </div>
              <div className="w-full">
                <label>Country</label>
                <select name="Address_Country">
                  <option value="-Select-">-Select-</option>
                  <option>Åland Islands</option>
                  <option>Afghanistan</option>
                  <option>Akrotiri</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>American Samoa</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Anguilla</option>
                  <option>Antarctica</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Aruba</option>
                  <option>Ashmore and Cartier Islands</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Bassas Da India</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bermuda</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Bouvet Island</option>
                  <option>Brazil</option>
                  <option>British Indian Ocean Territory</option>
                  <option>British Virgin Islands</option>
                  <option>Brunei</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burma</option>
                  <option>Burundi</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Cape Verde</option>
                  <option>Caribbean Netherlands</option>
                  <option>Cayman Islands</option>
                  <option>Central African Republic</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Christmas Island</option>
                  <option>Clipperton Island</option>
                  <option>Cocos (Keeling) Islands</option>
                  <option>Colombia</option>
                  <option>Comoros</option>
                  <option>Cook Islands</option>
                  <option>Coral Sea Islands</option>
                  <option>Costa Rica</option>
                  <option>Cote D'Ivoire</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Curaçao</option>
                  <option>Cyprus</option>
                  <option>Czech Republic</option>
                  <option>Democratic Republic of the Congo</option>
                  <option>Denmark</option>
                  <option>Dhekelia</option>
                  <option>Djibouti</option>
                  <option>Dominica</option>
                  <option>Dominican Republic</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>El Salvador</option>
                  <option>Equatorial Guinea</option>
                  <option>Eritrea</option>
                  <option>Estonia</option>
                  <option>Ethiopia</option>
                  <option>Europa Island</option>
                  <option>Falkland Islands (Islas Malvinas)</option>
                  <option>Faroe Islands</option>
                  <option>Federated States of Micronesia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>French Guiana</option>
                  <option>French Polynesia</option>
                  <option>French Southern and Antarctic Lands</option>
                  <option>Gabon</option>
                  <option>Gaza Strip</option>
                  <option>Georgia</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Gibraltar</option>
                  <option>Glorioso Islands</option>
                  <option>Greece</option>
                  <option>Greenland</option>
                  <option>Grenada</option>
                  <option>Guadeloupe</option>
                  <option>Guam</option>
                  <option>Guatemala</option>
                  <option>Guernsey</option>
                  <option>Guinea</option>
                  <option>Guinea-bissau</option>
                  <option>Guyana</option>
                  <option>Haiti</option>
                  <option>Heard Island and Mcdonald Islands</option>
                  <option>Holy See (Vatican City)</option>
                  <option>Honduras</option>
                  <option>Hong Kong</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Isle of Man</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Jan Mayen</option>
                  <option>Japan</option>
                  <option>Jersey</option>
                  <option>Jordan</option>
                  <option>Juan De Nova Island</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kiribati</option>
                  <option>Kosovo</option>
                  <option>Kuwait</option>
                  <option>Kyrgyzstan</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lesotho</option>
                  <option>Liberia</option>
                  <option>Libya</option>
                  <option>Liechtenstein</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Macau</option>
                  <option>Madagascar</option>
                  <option>Malawi</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Marshall Islands</option>
                  <option>Martinique</option>
                  <option>Mauritania</option>
                  <option>Mauritius</option>
                  <option>Mayotte</option>
                  <option>Mexico</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Montserrat</option>
                  <option>Morocco</option>
                  <option>Mozambique</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Navassa Island</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Caledonia</option>
                  <option>New Zealand</option>
                  <option>Nicaragua</option>
                  <option>Niger</option>
                  <option>Nigeria</option>
                  <option>Niue</option>
                  <option>Norfolk Island</option>
                  <option>North Korea</option>
                  <option>North Macedonia</option>
                  <option>Northern Mariana Islands</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Pakistan</option>
                  <option>Palau</option>
                  <option>Palestine</option>
                  <option>Panama</option>
                  <option>Papua New Guinea</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Pitcairn Islands</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Puerto Rico</option>
                  <option>Qatar</option>
                  <option>Republic of the Congo</option>
                  <option>Reunion</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Rwanda</option>
                  <option>Saint Barthelemy</option>
                  <option>Saint Helena</option>
                  <option>Saint Kitts and Nevis</option>
                  <option>Saint Lucia</option>
                  <option>Saint Martin</option>
                  <option>Saint Pierre and Miquelon</option>
                  <option>Saint Vincent and the Grenadines</option>
                  <option>Samoa</option>
                  <option>San Marino</option>
                  <option>Sao Tome and Principe</option>
                  <option>Saudi Arabia</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leone</option>
                  <option>Singapore</option>
                  <option>Sint Eustatius</option>
                  <option>Sint Maarten</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>Solomon Islands</option>
                  <option>Somalia</option>
                  <option>South Africa</option>
                  <option>South Georgia</option>
                  <option>South Korea</option>
                  <option>South Sudan</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>State of Palestine</option>
                  <option>Sudan</option>
                  <option>Suriname</option>
                  <option>Svalbard</option>
                  <option>Swaziland</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Taiwan</option>
                  <option>Tajikistan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Timor-Leste</option>
                  <option>Togo</option>
                  <option>Tokelau</option>
                  <option>Tonga</option>
                  <option>Trinidad and Tobago</option>
                  <option>Tromelin Island</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Turkmenistan</option>
                  <option>Turks and Caicos Islands</option>
                  <option>Tuvalu</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Vanuatu</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Wake Island</option>
                  <option>Wallis and Futuna</option>
                  <option>Western Sahara</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>
                </select>
              </div>
              <button className="!mt-[20px]" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveUrPotForm;
