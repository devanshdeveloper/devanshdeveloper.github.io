import Image from "next/image";

function TechnologyGlow({ tech }) {
  return (
    <div>
      <Image
        src={`/techstack/${tech}.svg`}
        width={60}
        height={60}
        className="lg:opacity-50 hover:opacity-100 transition-all duration-500 animate-spin-slow-reserve w-14 h-14 lg:h-20 lg:w-20"
        alt={tech}
      />
    </div>
  );
}

export default TechnologyGlow;
