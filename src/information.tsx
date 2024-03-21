type InfoProps = {
  title: string;
  explanation: string;
  madeWith: string;
};

const Info = ({ title, explanation, madeWith }: InfoProps) => {
  return (
    <div className="flex justify-center items-center mt-4 mx-4">
      <div className="bg-gray-400 rounded-md shadow-md">
        <h1 className="text-2xl lg:xl 2xl:text-6xl mx-4 my-2  block">
          {title}
          <div className="mb-10 mx-4">
            <p className="2xl:text-3xl mt-6 lg:mt-6">{explanation}.</p>
            <p className="2xl:text-3xl mt-10 lg:mt-2">{madeWith}</p>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Info;
