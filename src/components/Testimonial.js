import Image from "next/image";

function Testimonial({ profilePic, attestant, testimonialContent }) {
  return (
    <div className="bg-dark-900 text-white rounded-lg p-5 border hover:border-brand-dark transition-all duration-200 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Image
          src={profilePic}
          className="rounded-full"
          height={40}
          width={40}
          alt={attestant}
        />
        <h3 className="font-semibold text-lg">{attestant}</h3>
      </div>
      <p dangerouslySetInnerHTML={{ __html: testimonialContent }}></p>
    </div>
  );
}

export default Testimonial;
