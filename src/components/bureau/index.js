import React from "react";
import ReactDOM from "react-dom";
import Info from "./BureauInfo";

const bureauList = [
  {
    id: "123",
    logoImg: "logo_url",
    name: "Bureau_1",
    type: "bureau_1_type",
    business_reg_no: "1234",
    date_joined: Date.now(),
    social_fb: "url",
    social_tweeter: "url",
    social_linkedin: "url",
    social_google: "url",
    contact: {
      primary_email: "email",
      secondary_email: "email",
      phone_number_1: "phone",
      phone_number_2: "phone",
      contact_person: "person",
      contact_position: "position",
    },
    address: [
      {
        address: "address",
        address_line_2: "address_line_2",
        city: "city",
        province: "province",
        city: "city",
        country: "country",
      },
    ],
    description:"description"
  },
  {
    id: "123_2",
    logoImg: "logo_url_2",
    name: "Bureau_1_2",
    type: "bureau_1_type_2",
    business_reg_no: "1234_2",
    date_joined: Date.now(),
    social_fb: "url_2",
    social_tweeter: "url_2",
    social_linkedin: "url_2",
    social_google: "url_2",
    contact: {
      primary_email: "email_2",
      secondary_email: "email_2",
      phone_number_1: "phone_2",
      phone_number_2: "phone_2",
      contact_person: "person_2",
      contact_position: "position_2",
    },
    address: [
      {
        address: "address_2",
        address_line_2: "address_line_2_2",
        city: "city_2",
        province: "province_2",
        city: "city_2",
        country: "country_2",
      },
    ],
    description:"description_2"
  },

];

// Get a single ureau
const getBureauInfo = (id)=>{
    return bureauList.filter( bureau => bureau.id === id)
}
const BureauInfo = () => {

  const bureauInfo = getBureauInfo('id');

  // Get url part do display the correct component


  return <Info data={bureauInfo} />;
};

export default BureauInfo
