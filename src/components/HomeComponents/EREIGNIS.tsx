import { Button } from "@mui/material";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // For location icon
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

const EREIGNIS = () => {
  const { t } = useTranslation("home");
  const location = useLocation();
  const language = location.pathname.split("/")[1];
  const data = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLUBOtYAcXtzd7FCdpHT5lw7A2ZkYo~F5OGpP~cCuKC8OiOeoUzTgUBwdmUvyS7g5P9W4UTY68gQ6DlqlvdjToutjGuArLKdN0kXfuK624y7oaxuFzH8eG38DAQABzPUFghwI6o0CeYv3i-SB7ChpEc-qziF~OqgsT2zIoiv4Qzln5dVwl4UrB2zUcfTXpfxHQlja1GHSyh~JvIsVDb27G24Q9~jd607a5VC-uVBGpytavQazl1I-KVvLg39zkLdakdbswTOdOhFMlFHdmIHHREeur4VtYjXVDrj7ojAca0TiK1hfrd544HqghsY8b6i8wOO6D50aYv81QquERftig__", // Image URL
      location: "New York",
      date: "2024-12-04",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyExLnwlAGgTW0lQI4GtEhc-b2cjxNKILDMQVahchc890Eu2HnqI0C2hmMvj5MH0d~WxCgdgTZoe8r2~JS~csKXzqB9SAtqJH24Tnz49MSQKn2Crff5oVbNVniNKPEbgPlIqEFDnHcRE5jNUYiqm9X-gsctck1MtZMGnb1vI153d0PjJsGKGoGvvx7r446MdDacYVPgf-ZOnAUYuX54WfeKle5Rad8zt-gJfK0LMgMVaS37YRCl12IzGYBgw~mFuJKW1SNpQIFMjT68szUhpyG8bZ-JwmGhx~XWdD7B-nzw3GxUWWwnXBmNaLW4sykPPvQ7ueTyiOroeNQCa0zVHkw__", // Image URL
      location: "Los Angeles",
      date: "2024-12-05",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-sgaZTVodB-jWC0CkOaoxn4Zh~gOU3qyhunBpjeJHK4npgingCTT2t2OlIfE2WxuCilw3y1pAtE4O8KBThLWYHT-fE7eyPIdSk0g0ejY0BHlkFbBd0omhpUvhsGg4HOkQVrSLVXb7tJ4TypatU9eNg1UO8xdBp-X3LfgW-YDAClYsSwPMsJYJQSekLetVz3k88Obm8OGNOHiPNupblS7qa4qV~IYFiyhuuL-mRJpf3GTNlTdSsc6qYOCmLGvV6OA5XTPCDpiQo28fq0QtQ0VgIb~BWirlz7AafadvKeSGukx1oHdZrx0SrCOij58WuuGXg-pudqLp4bJQ1qGIhtjA__", // Image URL
      location: "Chicago",
      date: "2024-12-06",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/31b7/8242/e6076a7594c0c7ad8a415a638b7f50d0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKF4uxinifJ2pXlekVLOctMVlBu9rpAQgBV7QLpP6efIkTqYyLcbvLr9K3ms54IeNYp97iAYm3GkX6goRH~4v1eirK8MBVZmVTCINzpyk31AioeVW-R2QzADvt412ymUN-KfFht3zJEieVILeJu6~L0cIox4Gqe2C2vkMLXDFTpG5t7yFW5QMHEGcxP6x1uzHkRG3yoeLzsKJfmlR3devZy2X34zwkFs6IgoxiBbZcvzsi6BaSE9GUNbuH8aF86UTiRCB0qbF0fCpAYdOwNRnLh~BmfO8CG2FoEPpfdCVGxQoM0vFlS6iBmDQtg1Ne~rygv8KZDh4YD78dnuIKOpHg__", // Image URL
      location: "San Francisco",
      date: "2024-12-07",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLUBOtYAcXtzd7FCdpHT5lw7A2ZkYo~F5OGpP~cCuKC8OiOeoUzTgUBwdmUvyS7g5P9W4UTY68gQ6DlqlvdjToutjGuArLKdN0kXfuK624y7oaxuFzH8eG38DAQABzPUFghwI6o0CeYv3i-SB7ChpEc-qziF~OqgsT2zIoiv4Qzln5dVwl4UrB2zUcfTXpfxHQlja1GHSyh~JvIsVDb27G24Q9~jd607a5VC-uVBGpytavQazl1I-KVvLg39zkLdakdbswTOdOhFMlFHdmIHHREeur4VtYjXVDrj7ojAca0TiK1hfrd544HqghsY8b6i8wOO6D50aYv81QquERftig__", // Image URL
      location: "Dallas",
      date: "2024-12-08",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyExLnwlAGgTW0lQI4GtEhc-b2cjxNKILDMQVahchc890Eu2HnqI0C2hmMvj5MH0d~WxCgdgTZoe8r2~JS~csKXzqB9SAtqJH24Tnz49MSQKn2Crff5oVbNVniNKPEbgPlIqEFDnHcRE5jNUYiqm9X-gsctck1MtZMGnb1vI153d0PjJsGKGoGvvx7r446MdDacYVPgf-ZOnAUYuX54WfeKle5Rad8zt-gJfK0LMgMVaS37YRCl12IzGYBgw~mFuJKW1SNpQIFMjT68szUhpyG8bZ-JwmGhx~XWdD7B-nzw3GxUWWwnXBmNaLW4sykPPvQ7ueTyiOroeNQCa0zVHkw__", // Image URL
      location: "Miami",
      date: "2024-12-09",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-sgaZTVodB-jWC0CkOaoxn4Zh~gOU3qyhunBpjeJHK4npgingCTT2t2OlIfE2WxuCilw3y1pAtE4O8KBThLWYHT-fE7eyPIdSk0g0ejY0BHlkFbBd0omhpUvhsGg4HOkQVrSLVXb7tJ4TypatU9eNg1UO8xdBp-X3LfgW-YDAClYsSwPMsJYJQSekLetVz3k88Obm8OGNOHiPNupblS7qa4qV~IYFiyhuuL-mRJpf3GTNlTdSsc6qYOCmLGvV6OA5XTPCDpiQo28fq0QtQ0VgIb~BWirlz7AafadvKeSGukx1oHdZrx0SrCOij58WuuGXg-pudqLp4bJQ1qGIhtjA__", // Image URL
      location: "Seattle",
      date: "2024-12-10",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/31b7/8242/e6076a7594c0c7ad8a415a638b7f50d0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKF4uxinifJ2pXlekVLOctMVlBu9rpAQgBV7QLpP6efIkTqYyLcbvLr9K3ms54IeNYp97iAYm3GkX6goRH~4v1eirK8MBVZmVTCINzpyk31AioeVW-R2QzADvt412ymUN-KfFht3zJEieVILeJu6~L0cIox4Gqe2C2vkMLXDFTpG5t7yFW5QMHEGcxP6x1uzHkRG3yoeLzsKJfmlR3devZy2X34zwkFs6IgoxiBbZcvzsi6BaSE9GUNbuH8aF86UTiRCB0qbF0fCpAYdOwNRnLh~BmfO8CG2FoEPpfdCVGxQoM0vFlS6iBmDQtg1Ne~rygv8KZDh4YD78dnuIKOpHg__", // Image URL
      location: "Austin",
      date: "2024-12-11",
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-28 px-8 lg:px-20 ">
      <div className="text-center mb-8 ">
        <p className="font-medium text-customRed mb-1 uppercase">EVENTS</p>
        <h2 className="text-3xl font-medium mb-12 sm:mb-20 text-center">
          LOREM IPSUM IS SIMPLY
        </h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"
        style={{}}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-md border-dividers overflow-hidden hover:shadow-xl transition-all duration-300"
            style={{ width: "290px", maxHeight: "340px" }}
          >
            <img
              src={item.image}
              className="w-full h-48 object-cover"
              alt={item.title}
            />
            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center">
                <p className="text-gray-500">{item.date}</p>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-500 mr-1" />
                  <span className="font-bold">{item.location}</span>
                </div>
              </div>
              <p
                className="my-4 text-lg text-blue-600"
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "26px",
                }}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <NavLink to={`/${language}/events`}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "primary.main",
              color: "background.default",
            },
            py: 1.5,
            px: 5,
            borderRadius: "5px",
            fontSize: "1.2rem",
            textTransform: "none",
            color: "primary.main",

            border: "solid",
            borderColor: "primary.main",
            borderWidth: "1px",
          }}
        >
          {t("read_more")}
        </Button>
      </NavLink>
    </div>
  );
};

export default EREIGNIS;
