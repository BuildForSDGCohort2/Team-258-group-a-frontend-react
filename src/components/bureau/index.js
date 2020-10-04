import React from "react";
import BureauInfo from "./BureauInfo";
import JobSeekers from "./JobSeekers";
<<<<<<< HEAD
=======
import Dashboard from "./Dashboard";
>>>>>>> 225f12b2edda8ea4a30562f7eca469f03dd28192
import defaultImg from './img/default.png'
const bureauList = [
  {
    id: "123",
    logoImg:defaultImg,
    name: "Bureau_1",
    type: "bureau_1_type",
    business_reg_no: "1234",
    date_joined: Date.now(),
    social_fb: "url",
    social_tweeter: "url",
    social_linkedin: "url",
    social_google: "url",
    website:'us_in_the_game.com',
    contact: {
      primary_email: "email_1@email.com",
      secondary_email: "email@email.com",
      phone_number_1: "1111 555 77777",
      phone_number_2: "555 5566 6665",
      contact_person: "person",
      contact_position: "position",
    },
    address: [
      {
        address: "11 lakers berma",
        address_line_2: "address_line_2",

        province: "province",
        city: "city",
        country: "country",
      },
    ],
    description: `orem Ipsum is simply dummy
    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur
    vived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
  },
  {
    id: "123_2",
    logoImg:defaultImg,
    name: "Bureau_1_2",
    type: "bureau_1_type_2",
    business_reg_no: "1234_2",
    date_joined: Date.now(),
    social_fb: "url_2",
    social_tweeter: "url_2",
    social_linkedin: "url_2",
    social_google: "url_2",
    website:'url_2',
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

        province: "province_2",
        city: "city_2",
        country: "country_2",
      },
    ],
    description: "description_2",
  },
];

// Get a single bureau
const getBureauInfo = (id) => {
  return bureauList.filter((bureau) => bureau.id === id);
};
const Bureau = (props) => {
  const bureauData = getBureauInfo("123");


  const link = props.location.pathname;



  // Get url part do display the correct component

  switch(link){
      case "/bureau":
        return <BureauInfo data={bureauData} />
        break;
    case "/jobseeker":
      return <JobSeekers />
      break;
        default:
            return <div>Loading... </div>
  }
};

export default Bureau;
