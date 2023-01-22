interface ListItemProps {
  label: string;
  value: string;
}

export const ListItem = ({ label, value }: ListItemProps) => (
  <div className="flex justify-between">
    <p className="text-gray-400">{label}</p>
    <p className="text-white">{value}</p>
  </div>
);
