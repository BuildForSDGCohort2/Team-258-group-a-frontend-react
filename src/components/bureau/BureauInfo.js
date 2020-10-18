import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import './Bureau.css';
import Logo from './img/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"2%",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const info = {
      id: 0,
      name: "John Doe",
      logoImg: "some_URL",
      type: "Organization account",
      date_joined: "28-07-2020",
      contact: {
        phone_number_1: "993-121-220",
        phone_number_2: "993-121-221",
        primary_email: "email1@email.com",
        secondary_email: "email2@email.com",
        position: "Managing director"
      },
      website: "http://www.example.com",
      address: [{
        address: "Line 1, Rd. 1",
        address_line_2: "Line 2, Rd. 2",
        city: "Some city",
        country: "Some country",
      }],
      description: "Lorem ipsum, dollot si amer jfufccciif nnccldld nndd",
      tags: ["Tag1,", "Tag2,", "Tag3"]
    }

const BureauInfo = ({data}) => {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();
  // const info = data;

  return (
  <div className="container">
      <div className="content">
        <div className="row mt-5">
          <div className="col-md-3 content--border-gray p-3">
            <div className="content__content-one d-block">
              <div className="content-one__img">
                <img src="{Logo}" alt="Fumana Logo" className="img-fluid logo text-center" />
              </div>
              <p className="content-one__org-name"> <b className="text">Organization name:</b> {info.name}</p>
              <p className="content-one__org-type"><b className="text">Organization type:</b> {info.type}</p>
              <p className="content-one__acc-no"><b className="text">Fumana Acct. No.:</b> {info.id}</p>
              <p className="content-one__date-joined"><b className="text">Date joined:</b> {info.date_joined}</p>
              <div className="content-one__social d-inline">
                <i className="fa fa-2x fa-facebook"></i>
                <i className="fa fa-2x fa-twitter"></i>
                <i className="fa fa-2x fa-mail"></i>
              </div>
            </div>
          </div>
          <div className="col-md-9 content--border-gray p-3">
            <div className="content__content-two">
              <div className="row">
                <div className="col-md-3">
                  <p className="content-two__prim-email"><b className="text">Primary email:</b>
                    {info.contact.primary_email}
                  </p>
                  <p className="content-two__sec-email"><b className="text">Secondary email:</b> {info.contact.secondary_email}</p>
                  <p className="content-two__website"> <b className="text">Website:</b> {info.website}</p>
                </div>
                <div className="col-md-4">
                  <p className="content-two__pos"><b className="text">Position in Organization:</b>
                    {info.contact.position}
                  </p>
                  <p className="content-two__phone-one"><b className="text">Phone no. 1:</b> {info.contact.phone_number_1}
                  </p>
                  <p className="content-two__phone-two"><b className="text">Phone no. 2:</b> {info.contact.phone_number_2}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="content-two__business">
                    Business address: {info.address[0].address}, {info.address[0].address_line_2},
                    {info.address[0].city}
                  </p>
                  <p className="content-two__country">Country: {info.address[0].country}</p>
                </div>
                <div className="col-md-1">
                  <a href="/edit" title="Edit"><i className="fa fa-2x fa-edit"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 content--border-gray p-3">
            <div className="content__description-container">
              <div className="description-container__description-title text text--bold">Description section</div>
              <p className="description-container__description-content"> {info.description}</p>
              <div className="description-container__tags-title text text--bold">Tags</div>
              {info.tags}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BureauInfo