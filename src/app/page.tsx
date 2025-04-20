// import ImageK from "@/components/ImageK";
import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center pt-2 font-bold border-b-[1px] border-borderGray">
        <Link href="/general" className="border-b-4 pb-2 border-iconBlue ">
          For you
        </Link>

        <Link href="/general" className="pb-2  text-textGray">
          Follwing
        </Link>
      </div>
      <Share />
      <Feed />

      {/* <ImageK
        path="/general/cover.jpg"
        w="600"
        h="600"
        alt="Default Image "
        tr="e-grayscale"
      /> */}
    </div>
  );
};

export default Homepage;
