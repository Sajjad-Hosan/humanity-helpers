const VolunteerDetailsPage = () => {
  const data = [
    {
      Thumbnail: "thumbnail_url_20",
      Post_Title: "Mental Health Support Volunteers",
      Short_Description:
        "Provide support and compassion to those struggling with mental illness.",
      Description:
        "Provide support and compassion to those struggling with mental illness in our community. Volunteers will offer peer support, facilitate support groups, and provide resources. Make a difference by offering understanding and encouragement to those facing mental health challenges.",
      Category: "healthcare",
      Location: "Phoenix, AZ",
      "volunteers_needed": 8,
    },
  ];
  return (
    <div className="px-5 md:px-10 mt-10 relative">
      <div className="card p-5 bg-neutral h-[400px] md:h-[550px]"></div>
      <div className="card p-8 bg-base-100 md:shadow-lg md:w-[1000px] md:h-[300px] absolute md:bottom-[20rem] md:left-20">
        <div className="flex justify-between">
          <h1 className="text-3xl mb-4">Post Details</h1>
          <div className="flex gap-5">
          <div className="badge badge-neutral px-5 py-4 capitalize">{data[0].Category}</div>
          <div className="badge badge-neutral px-5 py-4 capitalize">Volunteer {data[0].volunteers_needed}</div>
          </div>
        </div>
        <h1 className="text-4xl">{data[0].Post_Title}</h1>
        <p className="text-md my-2">{data[0].Description}</p>
      </div>
      <div className="h-[400px]"></div>
    </div>
  );
};

export default VolunteerDetailsPage;
