import HotelSection1 from "../../Components/Hotels/HotelSection1";
import HotelSection2 from "../../Components/Hotels/HotelSection2";
import MainLayout from "../../Components/MainLayout";

const hotels = () => {
  return (
    <MainLayout>
      <HotelSection1 />
      <HotelSection2 />
    </MainLayout>
  );
};

export default hotels;
