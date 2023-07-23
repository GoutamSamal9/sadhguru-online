import ContainerLayout from "../ReUsable/ContainerLayout/ContainerLayout";
import InputField from "../ReUsable/InputField/InputField";

const ProfileSection = () => {
  return (
    <>
      <ContainerLayout>
        <div className="flex justify-center pt-3">
          <img
            className="h-40 w-40 rounded-full border-4 shadow-md"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="lg:w-3/4 sm:w-full h-auto py-8 px-4 m-auto mt-4">
          <div className="lg:flex justify-between items-center flex-wrap sm:block">
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Name"
                type="text"
                name="name"
                id="name"
                className="bg-[#f6f0e7]"
                placeholder="Sankaran pilae"
                value={"Sankaran pilae"}
                disabled
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Email"
                type="email"
                name="email"
                id="email"
                className="bg-[#f6f0e7]"
                placeholder="you@example.com"
                value={"spilae@example.com"}
                disabled
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Company Name"
                type="text"
                name="Company Name"
                id="companyName"
                className="bg-[#f6f0e7]"
                placeholder="Isha"
                value={"Isha"}
                disabled
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="VAT Number"
                type="text"
                name="VAT Number"
                id="VATNumber"
                className="bg-[#f6f0e7]"
                placeholder="1234567890"
                value={"1234567890"}
                disabled
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};
export default ProfileSection;
