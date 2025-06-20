export default function Section({
  bgColor,
  children,
}: {
  bgColor?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`w-full ${bgColor}`}>
      <div className="mx-auto w-[90%] ">{children}</div>
    </section>
  );
}
