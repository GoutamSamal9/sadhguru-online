import ContainerLayout from "../ReUsable/ContainerLayout/ContainerLayout";
import InputField from "../ReUsable/InputField/InputField";

const ProfileSection = () => {
  return (
    <>
      <ContainerLayout>
        <div className="flex justify-center pt-6">
          <img
            className="h-40 w-40 rounded-full border-4 shadow-md"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="lg:w-3/4 sm:w-full h-auto p-6 m-auto lg:mt-4">
          <div className="lg:flex justify-between items-center flex-wrap sm:block">
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Name"
                type="text"
                name="name"
                id="name"
                className="bg-[#e3ded5]"
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
                className="bg-[#e3ded5]"
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
                className="bg-[#e3ded5]"
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
                className="bg-[#e3ded5]"
                placeholder="1234567890"
                value={"1234567890"}
                disabled
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Phone"
                type="number"
                name="Phone"
                id="Phone"
                className="bg-[#e3ded5]"
                placeholder="9876543210"
                value={"9876543210"}
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Street"
                type="text"
                name="Street"
                id="Street"
                className="bg-[#e3ded5]"
                placeholder="IYC, Coimbatore, TN, India"
                value={"IYC, Coimbatore, TN, India"}
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="City"
                type="text"
                name="City"
                id="city"
                className="bg-[#e3ded5]"
                placeholder="Coimbatore"
                value={"Coimbatore"}
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Zip / Postal Code"
                type="text"
                name="Zip / Postal Code"
                id="zipCode"
                className="bg-[#e3ded5]"
                placeholder="754010"
                value={"754010"}
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="Country"
                type="text"
                name="Country"
                id="country"
                className="bg-[#e3ded5]"
                placeholder="Bharat"
                value={"Bharat"}
              />
            </div>
            <div className="lg:w-[48%] sm:w-full mt-3">
              <InputField
                label="State / Province"
                type="text"
                name="State / Province"
                id="state"
                className="bg-[#e3ded5]"
                placeholder="Tamil Nadu"
                value={"Tamil Nadu"}
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};
export default ProfileSection;
