import Image from "next/image";

type JollyOrpheusClickProps = {
  onClick: () => void; // setting the type of onClick to a function
};

export default function JollyOrpheusClick({ onClick }: JollyOrpheusClickProps) {
  return (
    <button onClick={onClick}>
      <Image
        src="/jollyorph.png"
        width={512}
        height={512}
        alt="Jolly Orpheus"
      />{" "}
    </button>
  );
}
