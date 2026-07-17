type SpecsTableProps = {
  specifications: { label: string; value: string }[];
};

export default function SpecsTable({ specifications }: SpecsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-forest/10">
      <table className="w-full text-sm">
        <tbody>
          {specifications.map((spec, i) => (
            <tr
              key={spec.label}
              className={i % 2 === 0 ? "bg-off-white" : "bg-white"}
            >
              <td className="px-6 py-4 font-medium text-foreground/60 w-2/5">
                {spec.label}
              </td>
              <td className="px-6 py-4 font-medium text-forest">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
